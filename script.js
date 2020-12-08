const videoPlayer = document.querySelector('#video')
const buttonStart = document.querySelector('#button')

const promptMediaStream = async () => {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia()
        videoPlayer.srcObject = mediaStream
        videoPlayer.onloadedmetadata = () => {
            videoPlayer.play()
        }
    } catch (err) {
        console.log('oops, error happened :', err)
    }
}

buttonStart.addEventListener('click', async () => {
    buttonStart.disabled = true
    await videoPlayer.requestPictureInPicture()
    buttonStart.disabled = false
})


promptMediaStream()