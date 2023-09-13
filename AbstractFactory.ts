
// 抽象工厂 BikeStore
class BikeStore {
  createProducts(
    WheelCreator: WheelCreator,
    BikeFrameCreator: BikeFrameCreator
  ) {
    const wheel = WheelCreator.create();
    const bikeFrame = BikeFrameCreator.create();
    this.install({ wheel, bikeFrame });
  }
  install(parts: { wheel: Wheel; bikeFrame: BikeFrame }) {
    const { wheel, bikeFrame } = parts;
    console.log(`安装了轮子，尺寸是${wheel.radius}`);
    console.log(`安装了车架，材质是${bikeFrame.material}`);
  }
}
// 产品1 轮子
interface Wheel {
  radius: Number;
}

interface WheelCreator {
  create: () => Wheel;
}

class WheelA implements Wheel {
  radius: Number = 5;
}
class WheelB implements Wheel {
  radius: Number = 10;
}
class WheelC implements Wheel {
  radius: Number = 20;
}

class WheelACreator implements WheelCreator {
  create = () => {
    return new WheelA();
  };
}
class WheelBCreator implements WheelCreator {
  create = () => {
    return new WheelB();
  };
}
class WheelCCreator implements WheelCreator {
  create = () => {
    return new WheelC();
  };
}

// 产品2 车架
interface BikeFrame {
  weight: Number;
  material: String;
}

interface BikeFrameCreator {
  create: () => BikeFrame;
}

class BikeFrameA implements BikeFrame {
  weight: Number = 10;
  material: String = "steel";
}
class BikeFrameB implements BikeFrame {
  weight: Number = 5;
  material: String = "AL";
}
class BikeFrameC implements BikeFrame {
  weight: Number = 1;
  material: String = "Carbon Fiber";
}

class BikeFrameACreactor implements BikeFrameCreator {
  create = () => {
    return new BikeFrameA 
  };
}
class BikeFrameBCreactor implements BikeFrameCreator {
  create = () => {
    return new BikeFrameB 
  };
}
class BikeFrameCCreactor implements BikeFrameCreator {
  create = () => {
    return new BikeFrameC 
  };
}

class main {
  constructor() {
    const bikeStore = new BikeStore
    bikeStore.createProducts(new WheelBCreator, new BikeFrameCCreactor)
  }
}

new main();
