class Person {
  constructor (fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
    this.greet()
  }

  greet() {
    console.log('Hi There',this.name + this.favoriteColor)
  }
}

export default Person