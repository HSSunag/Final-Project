from tkinter import *
from tkinter import ttk
from tkinter import filedialog
import keras
import numpy as np
from keras.models import load_model
 
 
class Root(Tk):
    def __init__(self):
        super(Root, self).__init__()
        self.title("Arecanut classification")
        self.minsize(640, 400)
 
        self.labelFrame = ttk.LabelFrame(self, text = "Upload a picture of Arecanut")
        self.labelFrame.grid(column = 0, row = 1, padx = 20, pady = 20)
 
        self.button()
        
 
 
    def button(self):
        self.button = ttk.Button(self.labelFrame, text = "Browse Picture",command = self.fileDialog)
        self.button.grid(column = 1, row = 1)
 
 
    def fileDialog(self):
 
        self.filename = filedialog.askopenfilename(initialdir =  "/", title = "Select A File", filetype =
        (("jpeg files","*.jpg"),("all files","*.*")) )
        self.label = ttk.Label(self.labelFrame, text = "")
        self.label.grid(column = 1, row = 2)
        self.label.configure(text = self.filename)
        img = keras.preprocessing.image.load_img(self.filename, target_size=(32, 32))
        img_array = keras.preprocessing.image.img_to_array(img)
        img_array = img_array/255.0
        img = np.expand_dims(img_array, axis = 0)
        model=load_model('my_model.h5')
        a = model.predict_classes(img)
        self.label.configure(text = a)
        
 
 
 
 
 
root = Root()
root.mainloop()
