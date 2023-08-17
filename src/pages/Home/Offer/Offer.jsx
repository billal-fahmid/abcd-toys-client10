import React, { useEffect, useRef, useState } from 'react';
// import Countdown from 'react-countdown';

const Offer = () => {

    const [timerDays, setTimerDays] = useState('00')
    const [timerHours, setTimerHours] = useState('00')
    const [timerMinutes, setTimerMinutes] = useState('00')
    const [timerSec, setTimerSeconds] = useState('00')

    let interval = useRef()

    const startTimer = ()=>{
        const countDownDate = new Date('May 30, 2024 00:00:00').getTime();

        interval = setInterval(()=>{
            const now = new Date().getTime();
            const distance =  now - countDownDate;
            // console.log(distance,'now',now)
            // console.log(countDownDate)

            const days = Math.floor(distance / (1000* 60 * 60 * 24)).toString().split('')
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))).toString().split('')
            const minutes = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60)).toString().split('')
            const seconds = Math.floor((distance % (1000 * 60 )) / 1000).toString().split('')
            const remove = days.toString().split('')
            days.shift()
            hours.shift()
            minutes.shift()
            seconds.shift()
            // console.log(remove.join(''))
            if(distance > 0 ){
                //stop timer
                clearInterval(interval.current)
            }else{
                // update timer
                setTimerDays(days.join(''))
                setTimerHours(hours.join(''))
                setTimerMinutes(minutes.join(''))
                setTimerSeconds(seconds.join(''))
              
            }

        },1000)
    }

    useEffect(()=>{

        startTimer()
        return ()=>{
            clearInterval(interval.current)

        }
    })
    // console.log(timerDays,timerHours)
 
   
    // https://i.ibb.co/KDqzrxm/paint-pencils-back-school-concept.jpg
    // background:'linear-gradient(to right, rgba(0, 0, 0, 0), #ff440069)

    return (

        <div className='pt-24 pb-20 lg:h-screen bg-cover bg-center ' style={{backgroundImage:`linear-gradient(to right, #febe009b,#febe009b), url(https://i.ibb.co/KDqzrxm/paint-pencils-back-school-concept.jpg)`}}>
       

            <div className='text-center mx-auto lg:w-3/4 px-6 sm:px-0'>
                <h3 className='text-5xl font-bold pb-4'> 15% Discount</h3>
                <p className='text-5xl  font-bold pb-8'>
                    On All Kid's Education Toys
                </p>
                <p className='text-2xl '>Offer Expires on</p>
                <div className='flex justify-center md:flex-row flex-col gap-10 mt-10 text-white '>
                    <section className='bg-[#ff4f3b] py-4 px-10 rounded-lg'>
                        <p className='text-5xl font-semibold'>{timerDays}</p>
                        <p className='text-2xl'><small>Days</small></p>
                    
                    </section>
                    <section className='bg-[#ff4f3b] py-4 px-10 rounded-lg'>
                        <p className='text-5xl font-semibold'>{timerHours}</p>
                        <p className='text-2xl'><small>Hrs</small></p>
                    
                    </section>
                    <section className='bg-[#ff4f3b] py-4 px-10 rounded-lg'>
                        <p className='text-5xl font-semibold'>{timerMinutes}</p>
                        <p className='text-2xl'><small>Mins</small></p>
                    
                    </section>
                    <section className='bg-[#ff4f3b] py-4 px-10 rounded-lg'>
                        <p className='text-5xl font-semibold'>{timerSec}</p>
                        <p className='text-2xl'><small>Secs</small></p>
                    
                    </section>
                 
                </div>
                <button className='text-black py-4 px-10 bg-white text-3xl mt-12 hover:bg-black hover:text-white transition-all font-bold rounded-full'>Shop Now</button>
            </div>
        </div>
    );
};

export default Offer;