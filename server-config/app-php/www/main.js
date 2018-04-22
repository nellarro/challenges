function given(num) {
	this.savedValue = num;
	this.multiply = function(num) {
		this.savedValue = this.savedValue * num
		return this;
	};
	this.divide = function(num) {
		this.savedValue = this.savedValue / num
		return this;
	};
	this.subtract = function(num) {
		this.savedValue -= num
		return this;
	};
	this.add = function(num) {
		this.savedValue += num
		return this;
	};
	this.value = function() {
		return this.savedValue
	}
	return this;
}
const num = given(10).multiply(5).add(6).divide(7).subtract(7).value()
console.log(num);