let obj = {
    name: "Samandar",
    age: 30,
    food: "osh",
    mine(){
        let person = {
            firstName: "Mavlonov",
            address: "Olmaliq",
            family(){
                let arr = [6, 2, "Dadam", "ayam",  "ayolim", "farzandlarim"]
                alert("Mening ismim " + obj.name + " Familyam " + person.firstName + ", Yoshim " + obj.age + "da. " + "Mening oilam " + arr[0] + " kishidan iborat. Ular: " + arr[2] + ", " + arr[3] + ", " + arr[4] + ", " + " va " + arr[1] + " nafar " + arr[5]);
            }
        }
        person.family()
    }
}
obj.mine()