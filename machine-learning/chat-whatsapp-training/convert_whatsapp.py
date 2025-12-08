import re, json, sys
from pathlib import Path

def clean_message(msg: str):
    msg = re.sub(r"(\+?\d{2,})", "[NUM]", msg)
    msg = msg.replace("\u200e", "").strip()
    return msg

def parse_lines(lines):
    """
    Detecta automaticamente o formato de data/hora:
    [06/07/2023, 13:15:21] Nome: Mensagem
    ou
    06/07/2023, 13:15 - Nome: Mensagem
    """
    patterns = [
        re.compile(r"^\[(\d{1,2}/\d{1,2}/\d{2,4}),\s(\d{1,2}:\d{2}(?::\d{2})?)\]\s([^:]+):\s(.*)$"),
        re.compile(r"^(\d{1,2}/\d{1,2}/\d{2,4}),\s(\d{1,2}:\d{2})\s-\s([^:]+):\s(.*)$"),
    ]

    chats = []
    for line in lines:
        for pattern in patterns:
            m = pattern.match(line)
            if m:
                date, time, user, msg = m.groups()
                chats.append((f"{date} {time}", user.strip(), clean_message(msg)))
                break
    return chats

def make_pairs(chats):
    pairs = []
    for i in range(len(chats) - 1):
        d1, u1, m1 = chats[i]
        d2, u2, m2 = chats[i + 1]
        if u1 != u2 and len(m1) > 0 and len(m2) > 0:
            pairs.append({
                "input": f"{u1}: {m1}",
                "output": f"{u2}: {m2}"
            })
    return pairs

if __name__ == "__main__":
    if len(sys.argv) < 3:
        print("Uso: python convert_whatsapp.py input.txt output.jsonl")
        sys.exit(1)

    in_file, out_file = Path(sys.argv[1]), Path(sys.argv[2])
    lines = in_file.read_text(encoding="utf-8", errors="ignore").splitlines()
    chats = parse_lines(lines)
    pairs = make_pairs(chats)

    with open(out_file, "w", encoding="utf-8") as f:
        for p in pairs:
            f.write(json.dumps(p, ensure_ascii=False) + "\n")

    print(f"[✔] Gerado {len(pairs)} pares em {out_file}")
