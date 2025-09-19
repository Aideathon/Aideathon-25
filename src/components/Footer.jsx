import React from 'react'
export default function Footer(){
  return (
    <footer className="footer">
      <div className="container">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}>
          <div>
            <div style={{fontWeight:800}}>Aideathon 2025</div>
            <div style={{color:'#6b7280',marginTop:6}}>Final Year AI & Data Science, C. Abdul Hakeem College of Engineering and Technology</div>
          </div>
          <div style={{textAlign:'right',color:'#6b7280'}}>
            <div>Contact: <strong>mavericsclubai@gmail.com</strong></div>
            <div style={{marginTop:6}}>Suresh Krishnan - Phone:6381599207</div>
            <div style={{marginTop:6}}>Kishor - Phone:8807426719</div>
          </div>
        </div>
        <div style={{textAlign:'center',color:'#9ca3af',marginTop:18}}>© Aideathon 2025 — All rights reserved</div>
      </div>
    </footer>
  )
}
