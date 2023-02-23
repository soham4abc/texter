import base64
from pickletools import optimize
from PIL import Image
from io import BytesIO
from scripts import ImageProcess


def text_to_image(datatext):
    datastr = (datatext.data).values
    datastr[0] = datastr[0].split(",", 1)

    data = datastr[0][1]

    im = Image.open(BytesIO(base64.b64decode(data)))

    im.save("image.png", "PNG")
    text = ImageProcess.image_to_text("image.png")
    return text
