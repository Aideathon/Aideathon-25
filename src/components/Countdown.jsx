
import React, {useEffect, useState} from 'react'
export default function Countdown({targetDate='2025-09-29T00:00:00'}){
  const calc = ()=>{
    const now = new Date().getTime()
    const t = new Date(targetDate).getTime()
    const diff = Math.max(0, t - now)
    const days = Math.floor(diff / (1000*60*60*24))
    const hours = Math.floor((diff / (1000*60*60)) % 24)
    const minutes = Math.floor((diff / (1000*60)) % 60)
    const seconds = Math.floor((diff/1000) % 60)
    return {days,hours,minutes,seconds,done: diff===0}
  }
  const [time, setTime] = useState(calc())
  useEffect(()=>{
    const iv = setInterval(()=> setTime(calc()), 500)
    return ()=> clearInterval(iv)
  },[targetDate])

  // simple highlight animation when number changes
  const NumberBlock = ({value,label})=>{
    const [pulse, setPulse] = useState(false)
    useEffect(()=>{ setPulse(true); const t=setTimeout(()=>setPulse(false),380); return ()=>clearTimeout(t)}, [value])
    return (
      <div className={'count-item' + (pulse? ' pulse':'')}>
        <div className="count-number">{String(value).padStart(2,'0')}</div>
        <div className="count-label">{label}</div>
      </div>
    )
  }

  return (
    <div className="countdown">
      <NumberBlock value={time.days} label="Days" />
      <NumberBlock value={time.hours} label="Hours" />
      <NumberBlock value={time.minutes} label="Minutes" />
      <NumberBlock value={time.seconds} label="Seconds" />
    </div>
  )
}
