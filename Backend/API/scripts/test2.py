import base64
from PIL import Image
from io import BytesIO
from scripts import ocr2


def text_to_image(datatext):
    # PERMANENT_PATH="C:/xampp/htdocs/ocr/Backend/base64.txt"
    # PERMANENT_PATH=""
    datastr = (datatext.data).values
    datastr[0] = datastr[0].split(",", 1)
    # print(datastr[0][1])
    # f = open(PERMANENT_PATH, "r")
    data = datastr[0][1]

    # f.closed

    im = Image.open(BytesIO(base64.b64decode(data)))
    im.save("image.png", "PNG")
    ocr2.image_to_text("image.png")
