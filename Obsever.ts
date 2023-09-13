class Subject {
  private observers:Observer[]
  private state: Object
  constructor() {
    this.observers = []
    this.state = {}
  }

  private notify(state: Object):void {
    this.observers.forEach(observer => observer.notice(state))
  }

  public register(observer: Observer): void {
    this.observers.push(observer)
  }

  public remove(name: string): void {
    for (let i = 0; i < this.observers.length; i++) {
      if (this.observers[i].name === name) {
        this.observers.splice(i, 1)
        break
      }
    }
  }

  public setState(newState: Object): void {
    this.state = newState
    this.notify(newState)
  }

  public getState(): Object {
    return this.state
  }
}
interface noticable {
  notice(data: Object):void
}
class Observer implements noticable{
  public name: string
  constructor(name: string) {
    this.name = name
  }
  notice(data: Object): void {
    console.log(`${this.name} recived data:`);
    console.log(data);
  }
}

const sub = new Subject()
const ob1 = new Observer('ob1')
const ob2 = new Observer('ob2')

sub.register(ob1)
sub.register(ob2)
sub.setState({...sub.getState(), a: 1})
sub.remove('ob1')
console.log(sub);
sub.setState({...sub.getState(), b: 1})