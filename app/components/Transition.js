import gsap from 'gsap'

export default class {
    constructor() {
    }

    show() {
        return new Promise(resolve => {
            // gsap.to('.transition', {
            //     x: 0,
            //     y: 0,
            //     duration: 1.5,
            //     ease: 'expo.out',
            //     onComplete: resolve
            // })

            ////////// ************** ///////////////
            // gsap.fromTo('.transition', {
            //     x: '120%',
            //     y: '120%',
            // }, {
            //     x: 0,
            //     y: 0,
            //     duration: 1.5,
            //     ease: 'expo.out',
            //     onComplete: () => {
            //         console.log('transition show complete')
            //         resolve()
            //     }
            // })


            ////////// ************** ///////////////
            gsap.timeline({onComplete: resolve})
            .fromTo('.transition_1', {
                x: '-120%',
                y: '-120%',
            }, {
                x: 0,
                y: 0,
                duration: 1.5,
                ease: 'expo.out'
            })
            .fromTo('.transition_2', {
                x: '120%',
                y: '120%',
            }, {
                x: 0,
                y: 0,
                duration: 1.5,
                ease: 'expo.out'
            }, '<')
        })
    }

    hide() {
        return new Promise(resolve => {
            // gsap.to('.transition', {
            //     x: '-120%',
            //     y: '-120%',
            //     duration: 1.5,
            //     ease: 'expo.in',
            //     onComplete: () => {
            //         console.log('transition hide complete')
            //         resolve()
            //     }
            // })

            ////////// ************** ///////////////

            gsap.timeline({onComplete: resolve})
            .to('.transition_1', {
                delay: 1,
                x: '-120%',
                duration: 1.5,
                ease: 'expo.in'
            })
            .to('.transition_2', {
                delay: 1,
                x: '120%',
                duration: 1.5,
                ease: 'expo.in'
            }, 0)
        })
    }

}
