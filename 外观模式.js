function stopEvent(e) {
	// 同时阻止事件默认行为和时间冒泡
    e.stopPropagation()
    e.preventDefault()
}
// stopEvent本身就是外观
$('#btn').click(function(e){
	stopEvent(e)
})