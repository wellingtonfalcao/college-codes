import time

import requests
from PIL import Image
from io import BytesIO
from ultralytics import YOLO
import matplotlib.pyplot as plt


url = "https://ultralytics.com/images/bus.jpg"
response = requests.get(url)
img = Image.open(BytesIO(response.content))

i = time.time()
model = YOLO("yolo12x.pt")
results = model(img)# ou YOLOv11 se tiver instalado
f = time.time()
print("Tempo em s:", f-i)

#n -> nano
#s -> small
#m -> medium
#l -> large
#x -> extralarge

for r in results:  # percorrer cada resultado
    annotated_img = r.plot()
    plt.imshow(annotated_img)
    plt.axis("off")
    plt.show()