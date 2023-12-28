
let currentImgIndex = 0

const images = document.querySelectorAll(".slideshowImg")

const totalImages = images.length

let campaignSlideCurrentImgIndex = 0

const campaignBenefitsImages = document.querySelectorAll(".campaignBenefitsSlideshowImg")

const campaignBenefitsDots = document.querySelectorAll(".campaignBenefitsImgDotWrapper span")

const campaignBenefitsTotalImages = campaignBenefitsImages.length

const arrowIcon = document.querySelector('.fa-circle-arrow-right')

const goBackButton = document.querySelector('.showPreviousImagesBtn')

const createCampaignStepOneWrapper = document.getElementById('createCampaignStepOneWrapper')

const createCampaignStepTwoWrapper = document.getElementById('createCampaignStepTwoWrapper')

const createCampaignStepThreeWrapper = document.getElementById('createCampaignStepThreeWrapper')

const createCampaignStepFourWrapper = document.getElementById('createCampaignStepFourWrapper')

let isStepTwoWrapperVisible = false

const selectCampaignTypeImgWrappers = document.querySelectorAll(".selectCampaignTypeImgWrapper")

let selectCampaignTypeImgWrapper = null

const selectDataFieldsImgCheckboxes = document.getElementsByClassName('selectDataFieldsImgCheckbox')

let selectDataFieldsImgChecked = false

let isStepThreeWrapperVisible = false

let isStepFourWrapperVisible = false

const selectCampaignHeading1 = document.querySelector(".selectCampaignHeading1")

const selectCampaignHeading2 = document.querySelector(".selectCampaignHeading2")

const selectCampaignHeading3 = document.querySelector(".selectCampaignHeading3")

const selectCampaignHeading4 = document.querySelector(".selectCampaignHeading4")

const stepCompletedDoubleCheckIcon1 = document.getElementById("stepCompletedDoubleCheckIcon1")

const stepCompletedDoubleCheckIcon2 = document.getElementById("stepCompletedDoubleCheckIcon2")

const stepCompletedDoubleCheckIcon3 = document.getElementById("stepCompletedDoubleCheckIcon3")

const stepCompletedDoubleCheckIcon4 = document.getElementById("stepCompletedDoubleCheckIcon4")

const calendarDates = document.getElementById("calendarDates")

const currentDate = document.getElementById("calendarMonthYear")

const calendarPrevMonthYearIcon = document.getElementById("calendarPrevMonthYearIcon")

const calendarNextMonthYearIcon = document.getElementById("calendarNextMonthYearIcon")


const navigateHomePageHandler = () => {
  window.location.href = "../HTML/home.html"
}


const slideshowHandler = () => {

  images[currentImgIndex].style.display = "none"

  currentImgIndex = (currentImgIndex + 1) % totalImages

  images[currentImgIndex].style.display = "block"

  setTimeout(slideshowHandler, 2000)

}
slideshowHandler()


const updateDotColors = () => {
  campaignBenefitsDots.forEach(dot => dot.style.backgroundColor = '#A08DCF')

  campaignBenefitsDots[campaignSlideCurrentImgIndex].style.backgroundColor = '#9E04C5'
}


const updateButtonVisibility = () => {

  if (campaignSlideCurrentImgIndex === 0) {

    arrowIcon.style.display = 'block'
    goBackButton.style.display = 'none'

  } else if (campaignSlideCurrentImgIndex === 5) {

    arrowIcon.style.display = 'none'
    goBackButton.style.display = 'block'

  } else {

    arrowIcon.style.display = 'block'
    goBackButton.style.display = 'none'

  }
}


const campaignSlideshowImageHandler = (direction) => {

  campaignBenefitsImages[campaignSlideCurrentImgIndex].style.display = "none"

  if (direction === 'forward') {
    campaignSlideCurrentImgIndex = (campaignSlideCurrentImgIndex + 1) % campaignBenefitsTotalImages
  }

  campaignBenefitsImages[campaignSlideCurrentImgIndex].style.display = "block"

  updateDotColors()

  updateButtonVisibility()
}
campaignSlideshowImageHandler()


const showPreviousImagesHandler = (direction) => {

  campaignBenefitsImages[campaignSlideCurrentImgIndex].style.display = "none"

  if (direction === 'backward') {
    campaignSlideCurrentImgIndex = 0
  }

  campaignBenefitsImages[campaignSlideCurrentImgIndex].style.display = "block"

  updateDotColors()

  campaignSlideshowImageHandler()
}
showPreviousImagesHandler()


const selectCampaignTypeHandler = (e) => {
  const selectedElement = e.currentTarget

  if (selectCampaignTypeImgWrapper) {
    selectCampaignTypeImgWrapper.style.border = "none"
  }

  selectedElement.style.border = "5px solid #4700FF"

  selectCampaignTypeImgWrapper = selectedElement
}

selectCampaignTypeImgWrappers.forEach((element) => {
  element.addEventListener("click", selectCampaignTypeHandler)
})


const showCampaignStepTwoHandler = () => {

  if (selectCampaignTypeImgWrapper) {

    if (!isStepTwoWrapperVisible) {
      createCampaignStepOneWrapper.style.display = 'none'

      createCampaignStepTwoWrapper.style.display = 'block'

      selectCampaignHeading1.style.color = '#CFB8FF'

      selectCampaignHeading2.style.color = '#fff'

      stepCompletedDoubleCheckIcon1.style.display = 'inline'

      isStepTwoWrapperVisible = true
    }
    else {
      createCampaignStepOneWrapper.style.display = 'block'
      createCampaignStepTwoWrapper.style.display = 'none'
    }
  }
  else {
    alert("Please select campaign type")
  }
}


const showPreviousStepOneHandler = () => {

  if (isStepTwoWrapperVisible) {

    createCampaignStepTwoWrapper.style.display = 'none'

    createCampaignStepOneWrapper.style.display = 'block'

    selectCampaignHeading1.style.color = '#fff'

    selectCampaignHeading2.style.color = '#CFB8FF'

    isStepTwoWrapperVisible = false

    stepCompletedDoubleCheckIcon1.style.display = 'none'
  }

  else {

    createCampaignStepTwoWrapper.style.display = 'block'

    createCampaignStepOneWrapper.style.display = 'none'
  }
}


const showCampaignStepThreeHandler = () => {

  for (const checkbox of selectDataFieldsImgCheckboxes) {

    if (checkbox.checked) {
      selectDataFieldsImgChecked = true
      break
    }
  }

  if (selectDataFieldsImgChecked) {
    createCampaignStepTwoWrapper.style.display = 'none'

    createCampaignStepThreeWrapper.style.display = 'block'

    selectCampaignHeading2.style.color = '#CFB8FF'

    selectCampaignHeading3.style.color = '#fff'

    isStepThreeWrapperVisible = true

    stepCompletedDoubleCheckIcon2.style.display = 'inline'
  }
  else {
    alert("Please select at least one data field")

    createCampaignStepThreeWrapper.style.display = 'none'
    createCampaignStepTwoWrapper.style.display = 'block'
  }
}


const showPreviousStepTwoHandler = () => {

  if (isStepThreeWrapperVisible) {

    createCampaignStepTwoWrapper.style.display = 'block'

    createCampaignStepThreeWrapper.style.display = 'none'

    selectCampaignHeading2.style.color = '#fff'

    selectCampaignHeading3.style.color = '#CFB8FF'


    isStepThreeWrapperVisible = false

    stepCompletedDoubleCheckIcon2.style.display = 'none'
  }


  else {

    createCampaignStepThreeWrapper.style.display = 'block'

    createCampaignStepTwoWrapper.style.display = 'none'
  }
}


const showPreviousStepThreeHandler = () => {

  if (isStepFourWrapperVisible) {

    createCampaignStepThreeWrapper.style.display = 'block'

    createCampaignStepFourWrapper.style.display = 'none'

    selectCampaignHeading3.style.color = '#fff'

    selectCampaignHeading4.style.color = '#CFB8FF'

    isStepFourWrapperVisible = false;

    isStepThreeWrapperVisible = true;

    stepCompletedDoubleCheckIcon3.style.display = 'none'
  }

  else {

    createCampaignStepThreeWrapper.style.display = 'none'

    createCampaignStepFourWrapper.style.display = 'block'

  }
}

const showCampaignStepFourHandler = () => {

  if (isStepThreeWrapperVisible) {
    createCampaignStepFourWrapper.style.display = 'block'

    createCampaignStepThreeWrapper.style.display = 'none'

    selectCampaignHeading3.style.color = '#CFB8FF'

    selectCampaignHeading4.style.color = '#fff'

    isStepThreeWrapperVisible = false

    isStepFourWrapperVisible = true

    stepCompletedDoubleCheckIcon3.style.display = 'inline'
  }
  else {
    createCampaignStepThreeWrapper.style.display = 'block'

    createCampaignStepFourWrapper.style.display = 'none'
  }
}


const navigateStepsCompletedPageHandler = () => {

  if (isStepFourWrapperVisible) {

    isStepFourWrapperVisible = false;

  }
  window.location.href = "../HTML/campaignDetailsAdded.html"
}


const showCampaignIdeasInfoHandler = () => {
  window.location.href = "../HTML/campaignIdeasInfo.html"
}



let date = new Date()
let currentYear = date.getFullYear()
let currentMonth = date.getMonth()

let startDate = null;
let endDate = null;

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

const renderCalendar = () => {

  let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()

  let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

  let liTag = ""

  for (let i = 1; i <= lastDateOfMonth; i++) {

    let isToday = i === date.getDate() && currentMonth === date.getMonth() && currentYear === date.getFullYear() ? "active" : ""

    let isSelected = isDateSelected(i)

    let isInRange = isDateInRange(i)

    liTag += `<li class="${isToday} ${isSelected} ${isInRange ? 'range' : ''}" data-date="${i}">${i}</li>`

  }

  currentDate.innerText = `${months[currentMonth]} ${currentYear}`

  calendarDates.innerHTML = liTag

  attachDateClickEvent()
};

function isDateSelected(day) {

  return (startDate && day === startDate) || (endDate && day === endDate) ? "selected" : ""

}

function isDateInRange(day) {

  return startDate && endDate && day > startDate && day < endDate;

}

function attachDateClickEvent() {

  const dateElements = document.querySelectorAll(".datesWrapper li")

  dateElements.forEach((element) => {
    element.addEventListener("click", handleDateClick)
  })

}

function handleDateClick(event) {

  const selectedDate = parseInt(event.target.dataset.date);

  if (!startDate) {

    startDate = selectedDate
    endDate = null

  } else if (selectedDate > startDate) {

    endDate = selectedDate

  } else {

    startDate = selectedDate
    endDate = null

  }


  renderCalendar()
}

renderCalendar()


const updateDateAndRender = () => {

  date = new Date(currentYear, currentMonth, date.getDate());

  renderCalendar()
}


calendarPrevMonthYearIcon.addEventListener("click", () => {

  currentMonth = (currentMonth - 1 + 12) % 12

  updateDateAndRender()

});


calendarNextMonthYearIcon.addEventListener("click", () => {

  if (currentMonth === 11) {

    currentYear++
    currentMonth = 0

  } else {

    currentMonth++
  }

  updateDateAndRender()
});