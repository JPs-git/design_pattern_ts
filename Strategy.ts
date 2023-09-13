interface Strategy {
  
  execute<T>(data: T): void
}


abstract class StrategyContext {
  private strategy: Strategy | null = null

  public setStrategy(strategy: Strategy): void {
    this.strategy = strategy
  }

  public useStrategy<T>(data: T): void {
    if (this.strategy) this.strategy.execute(data);
  }
}

class BubleSort implements Strategy {
  execute<T>(data: T): void {
    console.log('使用了bubleSort!')
  }
}
class QuickSort implements Strategy {
  execute<T>(data: T): void {
    console.log('使用了QuickSort!')
  }
}
class MergeSort implements Strategy {
  execute<T>(data: T): void {
    console.log('使用了mergeSort!')
  }
}

class myTable extends StrategyContext {
  public useStrategySort(arr: Array<Number>) {
    this.useStrategy(arr)
  }
}

class main {
  constructor() {
    const bubleSrotStrategy = new BubleSort
    const quickSortStrategy = new QuickSort
    const mergeSrotStrategy = new MergeSort
    const arr1 = [1, 2, 3]
    const table = new myTable

    table.setStrategy(bubleSrotStrategy)
    table.useStrategySort(arr1)
    table.setStrategy(quickSortStrategy)
    table.useStrategySort(arr1)
    table.setStrategy(mergeSrotStrategy)
    table.useStrategySort(arr1)

  }
}

new main()
