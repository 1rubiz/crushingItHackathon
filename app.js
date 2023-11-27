/////// METHODS CREATED/////////


// Increamenting function that increase the progress bar and the number of checked list
function increaseProgress(increment) {
  let val = document.querySelector('#progress').value
  document.querySelector('#progress').value = val + 1;
}

// Increamenting function that decrease the progress bar and the number of checked list
function decreaseProgress() {
  let val = document.querySelector('#progress').value
  document.querySelector('#progress').value = val - 1;
}

// closeAll method turns the css display of all classes passed as a prop to 'none'
const closeAll = ()=>{
  document.querySelectorAll(element).style.display = 'none';
}

// openAll method turns the css display of all classes passed as a prop to 'block'
const openAll = ()=>{
  document.querySelectorAll(element).style.display = 'inline-block';
}

// turnOff method turns the css display of all classes of specific sections passed as a prop to 'none'
const turnOff = (tag)=>{
  const element = document.querySelectorAll('.content'+tag);
  element.forEach((item)=>{
      item.style.display = 'none';
  }) 
}

// Toggle method to handle the checked and checked state of the sections
const toggleControl = (id)=>{
  for (var i = 5; i >= 1; i--) {
    if(i !== id){
      turnOff(i)
      document.querySelector('.background'+i).style.backgroundColor = 'white'
    }else{
      toggleAllElements(i)
      document.querySelector('.background'+i).style.background = '#f3f3f3'
    }
  }
}

// initial toggleControl method call
toggleControl(1);


// changeSvg function handles the icon change from unchecked to checked
function changeSvg(element) {
    // Get the SVG elements
    const parent = document.querySelector(element)

    // conditions to check if state is checked or unchecked
    if(parent.querySelector('.checked').classList.length > 1){
      parent.querySelector('.unchecked').style.display = 'none'
      increaseProgress()
      parent.querySelector('.checked').classList.remove('invisible')
    }else{
      parent.querySelector('.unchecked').style.display = 'block'
      decreaseProgress()
      parent.querySelector('.checked').classList.add('invisible')
    }
}


// Toggle function to handle the navigation panel
function toggleNav(tag) {
  // Get the elements by their IDs
  const element = document.querySelector(tag);

  // conditions to check the state of the navigation bar
  if (element.style.display === 'flex') {
    element.style.display = 'none';
  } else {
    element.style.display = 'flex';
  }
}

// Toggle function to handle the notifiation panel
function toggleNotification(tag) {
  // Get the elements by their IDs
  const element = document.querySelector(tag);

  // condition that check the state of the notification panel
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// Toggle function to handle the state change of elements indicated by their class or ID
function toggleElements(tag) {
  // Get the elements by their IDs
  const element = document.querySelector(tag);

  // Toggle the display property
  if (element.style.display === 'none') {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}

// toggleAllElements gets the array of class from different elements on the body idicated by their class or id
function toggleAllElements(tag) {
  // Get the elements by their IDs
  const element = document.querySelectorAll('.content'+tag);

  // foreach method that handles individual state changes of each class or id in the array of classes or ids
  element.forEach((item)=>{
          // Toggle the display property
        if ((item.style.display === 'none') || (item.style.display === '')) {
          item.style.display = 'block';
        } else if(item.style.display !== 'none'){
          item.style.display = 'none';
        }
  })
}


///// METHOD USAGE///////

// onclick eventlistener for the specific class
document.querySelector('.circularProgress-1').addEventListener('click', ()=>{
  changeSvg('.circularProgress-1')
  toggleControl(1)
})

// onclick eventlistener for the specific class
document.querySelector('.circularProgress-2').addEventListener('click', ()=>{
  changeSvg('.circularProgress-2')
  toggleControl(2)
})

// onclick eventlistener for the specific class
document.querySelector('.circularProgress-3').addEventListener('click', ()=>{
  changeSvg('.circularProgress-3')
  toggleControl(3)
})

// onclick eventlistener for the specific class
document.querySelector('.circularProgress-4').addEventListener('click', ()=>{
  changeSvg('.circularProgress-4')
  toggleControl(4)
})

// onclick eventlistener for the specific class
document.querySelector('.circularProgress-5').addEventListener('click', ()=>{
  changeSvg('.circularProgress-5')
  toggleControl(5)
})

// onclick eventlistener for the specific class
document.querySelector('.setUpGuideIconContainer').addEventListener('click', ()=>{
  toggleElements('.customizeOptions')
})

// 
document.querySelector('.navbtn').addEventListener('click', ()=>{
  toggleNav('.notificationWrapper')
})

document.querySelector('.bell-bar').addEventListener('click', ()=>{
  toggleNav('.alertWrapper')
})