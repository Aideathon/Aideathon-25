import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import API from '../services/api'

export default function Dashboard(){
  const [teams, setTeams] = useState([])
  useEffect(()=>{ fetchTeams() },[])
  async function fetchTeams(){ try{ const res = await API.get('/teams/'); setTeams(res.data) }catch(err){ console.error(err); setTeams([]) } }
  return (
    <div style={{padding:'24px 0'}}>
      <h2>Registered Teams</h2>
      <div style={{display:'grid',gap:12}}>
        {teams.length===0 && <Card><div style={{color:'#374151'}}>No teams found yet.</div></Card>}
        {teams.map(team=>(
          <Card key={team.id} style={{display:'block'}}>
            <div className='team-header'>
              <div>
                <div style={{fontWeight:800}}>{team.team_name}</div>
                <div style={{color:'#6b7280'}}>{team.project_title}</div>
              </div>
              <div>
                {team.ppt_filename && <a href={`http://127.0.0.1:8000/teams/${team.id}/ppt`} style={{textDecoration:'none',color:'var(--primary)'}} target='_blank' rel='noreferrer'>Download PPT</a>}
              </div>
            </div>
            <ul className='members'>
              {team.members.map(m=>(
                <li key={m.id} className='member'>
                  <div>
                    <div className={m.is_lead ? 'lead' : ''}>{m.name}</div>
                    <div style={{color:'#6b7280', fontSize:13}}>{m.email}</div>
                  </div>
                  <div style={{textAlign:'right'}}>
                    {m.phone && <div style={{fontSize:13,color:'#6b7280'}}>{m.phone}</div>}
                    {m.is_lead && <div style={{marginTop:6,color:'var(--success)',fontWeight:700}}>Team Lead</div>}
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </div>
  )
}
