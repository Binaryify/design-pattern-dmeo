var arr = ["1", "2", "3"];
var diedai = (function() {
    var length = arr.length,
        index = 0;
    return {
        hasNext: function() {
            return index < length;
        },
        next: function() {
            var data = arr[index];
            index = index + 1;
            return data;
        },
        reset: function() {
            index = 0;
        }

    }
})();
while (diedai.hasNext()) {
    console.log(diedai.next()) //1,2,3
}
