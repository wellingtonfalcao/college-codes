import cv2
from ultralytics import YOLO

camera = cv2.VideoCapture(0)
modelo = YOLO("yolo12x.pt")
if not camera.isOpened():
    print("Erro ao abrir a câmera")
    exit()
print("Câmera aberta com sucesso!")
print("Pressione 'q' para sair")
print("Pressione 'g' para salvar")
x = 0
while True:
    ret, frame = camera.read()
    if not ret:
        print("Erro na câmera")
        break

    resultados = modelo(frame)
    anotado = resultados[0].plot()
    cv2.imshow("Câmera", anotado)

    tecla = cv2.waitKey(1)

    if tecla == ord('g'):
        filename = f"foto_{x}.png"
        cv2.imwrite(filename, frame)
        print("Foto salva com sucesso!")
        x += 1

    if tecla == ord('q'):
        print("Encerrando o programa")
        break
camera.release()
cv2.destroyAllWindows()