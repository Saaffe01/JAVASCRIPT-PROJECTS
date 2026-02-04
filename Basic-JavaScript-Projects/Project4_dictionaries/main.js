function my_dictionary (){
    let dictionary1 = {
        "Apple": 'A fruit that is normally red',
        "Banana": 'A long yellow fruit',
        "Grapes": 'Small round fruits that grow in bunches',
    }
    delete dictionary1.Banana;
    document.getElementById('Dictionary').innerHTML = dictionary1.Grapes;
}
