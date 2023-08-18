import React from "react";
import FlyingTextComponent from "./Animated_text_remix";

const App = () => {
  const testText = `from torch.utils.data import DataLoader

def svg_data(root_dir):
    compose = transforms.Compose(
        [transforms.ToTensor(),
         transforms.Normalize((.5,), (.5,))
        ])
    return SVGDataset(root_dir=root_dir, transform=compose)

# Load data
data = svg_data(root_dir='/content/drive/MyDrive/Classes/deeplearningOMS/final project/Kais_Projects/GAN_MNIST/data/images/svg')
# Create loader with data, so that we can iterate over it
data_loader = DataLoader(data, batch_size=20, shuffle=True)
# Num batches
num_batches = len(data_loader)
print(num_batches)`;

  return (
    <div>
      <FlyingTextComponent testText={testText} />
    </div>
  );
};

export default App;
