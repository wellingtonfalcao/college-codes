from ultralytics import YOLO
model = YOLO("yolov8n.pt")
classes=model.model.names
print("Classes do COCO")
for id,name in classes.items():
    print(f"{id}: {name}")