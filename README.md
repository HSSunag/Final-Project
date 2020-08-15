# Areacanut Classification using Convolutional Neural Networks

Areca nut is the crop grown mainly in South Asia and East Africa. In India, it is grown in coastal regions of Karnataka and Kerala. The word Areca is derived from the Kannada word Adike. For one kilogram of Areca, the market value is around rupees 300 as of 2020. The invaders to India took the crop from India to Europe in 1600s. India is the leader in production of Areca, with almost half of the world‘s total production comes from India. It is also produced in countries like Bangladesh, Myanmar and Taiwan.   
It is an annual crop. Areca nut gives huge profit to the farmers. Areca nut is the seed of a fruit. It is not a nut as the name indicates. Traditionally, they are chewed along with the betel leaves. They are used in medicines. But these also have adverse effect on human health. In 2003, a group sponsored by World Health Organization found that chewing Areca nuts can cause cancer. It is financially accessible in dried, relieved, and new structures. At the point when the husk of the new natural product is green, the nut inside is sufficiently delicate to be cut with an ordinary blade. In the ready organic product, the husk gets yellow or orange, and as it dries, the natural product inside solidifies to a wood-like consistency. At that stage, the areca nut must be cut utilizing an uncommon scissors-like shaper. 

## Getting Started

Clone all the code to local system. Have python installed in the system.

### Prerequisites and Installing

1. Install NODE JS.
2. Install React JS.
3. Create a Node project.
4. Create a React project.
5. Install node modules specified in code of NodeJS 

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc

## To build the model we need to create the architecture using Sequential() .
from keras.models import Sequential
from keras.layers import Dense, Flatten, Conv2D, MaxPooling2D
model = Sequential()
## Next we add the first layer, a convolution layer to extract features from the input image, and create 32 5 x 5 ReLu convoluted features also known as feature maps. Since this is the first layer we must input the dimension shape which is a 128 x 128 pixel image with depth = 3 (RGB).
model.add(Conv2D(32, (5, 5), activation='relu', input_shape=(128,128,3)))
## The next layer will be a pooling layer with a 2 x 2 pixel filter to get the max element from the feature maps. This reduces the dimension of the feature maps by half and is also known as sub sampling.
model.add(MaxPooling2D(pool_size=(2, 2)))
## Create one more convolution layer and pooling layer like before, but without the input_shape.
model.add(Conv2D(64, (5, 5), activation='relu'))
model.add(MaxPooling2D(pool_size=(2, 2)))
## Add a flattening layer, to reduce the image to a linear array also known as a one 1-Dimension vector to feed into and connect with the neural network.
model.add(Flatten())
## Now create a neural network where the first layer has 1000 neurons and the activation function ReLu.
model.add(Dense(1000, activation='relu'))
## Create the last layer of this neural network with 10 neurons (one for each label) using the softmax function.
model.add(Dense(10, activation='softmax'))
