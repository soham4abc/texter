import cv2
import os, argparse
import pytesseract
from PIL import Image

# We then Construct an Argument Parser


def image_to_text(path):
    # We then read the image with text
    images = cv2.imread(path)

    # convert to grayscale image
    gray = cv2.cvtColor(images, cv2.COLOR_BGR2GRAY)

    # memory usage with image i.e. adding image to memory
    filename = "{}.png".format(os.getpid())
    cv2.imwrite(filename, gray)
    text = pytesseract.image_to_string(Image.open(filename))
    os.remove(filename)
    # print(text)
    file1 = open("../../Frontend/documents/MyFile.txt", "w")
    file1.write(text)

    # show the output images
    # cv2.imshow("Image Input", images)
    # cv2.imshow("Output In Grayscale", gray)
    cv2.waitKey(0)
