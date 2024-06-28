export const useCounter = () => {

function increaseCounter(){
	let counter = 0
	
	return () => counter++
}
onMounted(() => {
	increaseCounter()
})
onBeforeUnmount(() => {
	console.log('unmouting')
})
return {increaseCounter}
}