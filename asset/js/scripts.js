var itemImgs = document.querySelectorAll('.studies--img img')
var nextStudiesSlide = document.querySelector('.studies__next i')
var prevStudiesSlide = document.querySelector('.studies__prev i')
var studiesSlideItem = document.querySelectorAll('.studies__slide--item')
var studiesAvatars = document.querySelectorAll('.studies__avt--item')

var currentStudiesIndex = 0;

var setStudiesSlide = (index) => {
    
    document.querySelector('.studies__slide--item.active').classList.remove('active')
    document.querySelector('.studies__avt--item.active').classList.remove('active')

    studiesSlideItem[index].classList.add('active')
    studiesAvatars[index].classList.add('active')
}

nextStudiesSlide.addEventListener('click', () => {
    if(currentStudiesIndex >= studiesSlideItem.length -1){
        currentStudiesIndex = 0
    }else{
        currentStudiesIndex++
    }
    setStudiesSlide(currentStudiesIndex)
})

prevStudiesSlide.addEventListener('click', () => {
    if(currentStudiesIndex <= 0){
        currentStudiesIndex = studiesSlideItem.length -1
    }else{
        currentStudiesIndex--
    }
    setStudiesSlide(currentStudiesIndex)
})

setInterval(()=>{
    nextStudiesSlide.click()
},5000)

studiesAvatars.forEach((item,index)=>{
    item.addEventListener('click', ()=>{
        currentStudiesIndex = index
        setStudiesSlide(currentStudiesIndex)
    })
})
