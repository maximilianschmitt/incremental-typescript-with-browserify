'use strict'

class TestClass {
  fullName: string
  constructor (firstName : string, lastName : string) {
    this.fullName = firstName + lastName
  }
}

export default TestClass
