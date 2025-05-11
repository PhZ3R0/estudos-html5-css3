import 'package/dist/sweetalert2.js'
import 'package/src/sweetalert2.css'

function load() {
    Swal.fire("Sweet alert is working!");
}

Swal.fire({
    title: 'Error!',
    text: 'Do you want to continue?',   
    icon: 'error',
    confirmbuttontext: 'Cool!'
})

