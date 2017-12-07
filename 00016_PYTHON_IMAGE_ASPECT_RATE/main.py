# -*- coding: utf-8 -*-

from PIL import Image

class image_aspect():

    def __init__(self, image_file, aspect_width, aspect_height):
        self.img = Image.open(image_file)
        self.aspect_width = aspect_width
        self.aspect_height = aspect_height
        self.result_image = None

    def change_aspect_rate(self):
        img_width = self.img.size[0]
        img_height = self.img.size[1]

        if (img_width / img_height) > (self.aspect_width / self.aspect_height):
            rate = self.aspect_width / img_width
        else:
            rate = self.aspect_height / img_height

        rate = round(rate, 1)
        print(rate)
        self.img = self.img.resize((int(img_width * rate), int(img_height * rate)))
        return self

    def past_background(self):
        self.result_image = Image.new("RGB", [self.aspect_width, self.aspect_height], (0, 0, 0, 255))
        self.result_image.paste(self.img, (int((self.aspect_width - self.img.size[0]) / 2), int((self.aspect_height - self.img.size[1]) / 2)))
        return self

    def save_result(self, file_name):
        self.result_image.save(file_name)

        
if __name__ == "__main__":
    image_aspect("./source/test.jpg", 1920, 1080).change_aspect_rate().past_background().save_result("./target/test.jpg")
