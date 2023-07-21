import React, { useEffect, useState } from 'react'
import './Structure.css'
import NavBar from '../Components/NavBar'
import { Container } from '@mui/material'
import StructureButton from '../Components/StructureButton'
import { useDispatch, useSelector } from 'react-redux'
import { check, genrate, recheck } from '../Slice/strucureSlice'
import CircularProgress from '@mui/material/CircularProgress';
function Structure() {
    const [showInput, setShowInput] = useState(false);
    const [volume,setVolume] = useState(0)
    const [stageing_height,setStageingHeight] =useState(0)
    const [elevation,setElevation] =  useState(0)
    const [ wh,setWh] = useState(0)
    const [tbwh,setTbwh] = useState(0)
    const[dtbw,setDtbw] =  useState(0)
    const [twb,setTwb]  =useState(0)
    const [r,setR] = useState(0)
    const [ncr,setNcr] =  useState(0)
    const [dl,setDl] = useState(0)
    const [nl,setNl] = useState(0)
    const [dbw4,setDbw4] = useState(0)
    const[bw4,setBw4] = useState(0)
    const[tl,setTl] = useState(0)
    const[ver,setVer] = useState(0)
    const[dbw3,setDbw3] = useState(0)
    const[bw3,setBw3] = useState(0)
    const[tdom1,setTdom1] = useState(0)
    const[tdom2,setTdom2] = useState(0)
    const[tdom3,setTdom3] = useState(0)
    const[tcon,setTcon] =  useState(0)
    const[bw2,setBw2] = useState(0)
    const[dbw2,setDbw2] = useState(0)
    const[cr,setCr] = useState(0)
    const[harch1,setHarch1] = useState(0)
    const[parch2,setParch2] = useState(0)
    const[watlevv,setWatlevv] = useState(0)
    const[ttb,setTtb] = useState(0)
    const[dttb,setDttb] = useState(0)
    const[t3,setT3] = useState(0)
    const[df,setDf] = useState(0)
    const[dbw,setDbw] = useState(0)
    const[bw,setBw] = useState(0)
    const[sbc,setSbc] = useState(0)
    const[tdf,setTdf] = useState(0)
    const[aw,setAw] = useState(0)
    const[no_of_s,setNo_of_s] = useState(0)


    const dispatch =  useDispatch()
    const structureData = useSelector((state)=>state.strcture?.structureData)
    const loading =  useSelector((state)=>state.strcture?.loading)
    const handleNextStep = ()=>{
        const data = { 
            volume:volume,
            stageing_height:stageing_height,
            elevation :elevation
        }
        dispatch(check(data))
        setShowInput(!showInput)
    }
    const handleGenrate = ()=>{
        const data = {
            vol: volume,
            st: stageing_height,
            ele: elevation,
            ncr: ncr,
            cr: cr,
            aw: aw,
            bw: bw,
            t1: tl,
            t3: t3,
            tbw: twb,
            tdf: tdf,
            parc2: parch2,
            tcone: tcon,
            tbwt: tbwh,
            df: df,
            dtbw: dtbw,
            n1: nl,
            ver: ver,
            harc1: harch1,
            tdome1: tdom1,
            tdome2: tdom2,
            tdome3: tdom3,
            ttb: ttb,
            dttb: dttb,
            watlevv: watlevv,
            dbw: dbw,
            r: r,
            d1: dl,
            wh: wh,
            bw4: bw4,
            dbw4: dbw4,
            bw3: bw3,
            dbw3: dbw3,
            bw2: bw2,
            dbw2: dbw2,
            sbc:sbc
        }
        dispatch(genrate(data))
    }
    const handleUpdate = ()=>{
        const data = {
            vol: volume,
            st: stageing_height,
            ele: elevation,
            ncr: ncr,
            cr: cr,
            aw: aw,
            bw: bw,
            t1: tl,
            t3: t3,
            tbw: twb,
            tdf: tdf,
            parc2: parch2,
            tcone: tcon,
            tbwt: tbwh,
            df: df,
            dtbw: dtbw,
            n1: nl,
            ver: ver,
            harc1: harch1,
            tdome1: tdom1,
            tdome2: tdom2,
            tdome3: tdom3,
            ttb: ttb,
            dttb: dttb,
            watlevv: watlevv,
            dbw: dbw,
            r: r,
            d1: dl,
            wh: wh,
            bw4: bw4,
            dbw4: dbw4,
            bw3: bw3,
            dbw3: dbw3,
            bw2: bw2,
            dbw2: dbw2,
            sbc:sbc,
            no_of_s:no_of_s
        }
        dispatch(recheck(data))
    }
    useEffect(()=>{
        console.log("my  data nigger",structureData)
        setAw(structureData?.aw)
        setBw(structureData?.bw)
        setBw2(structureData?.bw2)
        setBw3(structureData?.bw3)
        setBw4(structureData?.bw4)
        setCr(structureData?.cr)
        setDbw(structureData?.dbw)
        setDbw2(structureData?.dbw2)
        setDbw3(structureData?.dbw3)
        setDbw4(structureData?.dbw4)
        setR(structureData?.r)
        setDf(structureData?.df)
        setDl(structureData?.d1)
        setDtbw(structureData?.dtbw)
        setDttb(structureData?.dttb)
        setElevation(structureData?.ele)
        setHarch1(structureData?.harc1)
        setNcr(structureData?.ncr)
        setNl(structureData?.n1)
        setParch2(structureData?.parc2)
        setSbc(structureData?.sbc)
        setT3(structureData?.t3)
        setTbwh(structureData?.tbwt)
        setTcon(structureData?.tcone)
        setTdf(structureData?.tdf)
        setTdom1(structureData?.tdome1)
        setTdom2(structureData?.tdome2)
        setTdom3(structureData?.tdome3)
        setTl(structureData?.t1)
        setTtb(structureData?.ttb)
        setTwb(structureData?.tbw)
        setVer(structureData?.ver)
        setVolume(structureData?.vol)
        setWatlevv(structureData?.watlevv)
        setWh(structureData?.wh)
        setSbc(structureData?.sbc)
        setNo_of_s(structureData?.no_of_s)
    },[structureData])
  return (

    <div>
      
        <NavBar />
        <div className='structurehero'>
            <Container>
                <span className='tranhead'>Structure</span>
            </Container>
        </div>
        <div>
            <Container >
                <p className='structuretxt'>Home > Structure</p>
            </Container>
        </div>
        <Container className='struhero'>
            <div className='struhero'>
            <div>
                <StructureButton />
            </div>
            <div>
                { loading ? 
                <Container>
                    <div className='loader' >
                        <CircularProgress />
                    </div>
                </Container> : 
                <button className='strucnext' onClick={handleNextStep} >NEXT STEP</button>
                }
            </div>
            </div>
        </Container>
       
           
            
        <Container>
                <div className='strucform'>
                    <p className='structlabel'>Volume</p>
                    <input className='structinput' onChange={(e)=>setVolume(e.target.value)} />
                </div>
                <div className='strucform'>
                    <p className='structlabel'>Staging Height</p>
                    <input  className='structinput' onChange={(e)=>setStageingHeight(e.target.value)} />
                </div>
                <div className='strucform'>
                    <p className='structlabel'>Elevation</p>
                    <input className='structinput' onChange={(e)=>setElevation(e.target.value)} />
                </div>
        </Container>
        
        {showInput  &&  !loading && (
        <Container>
            <div className='strucform'>
                <p className='structlabel'>Wh</p>
                <input className='structinput' value={wh} onChange={(e)=>setWh(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tbwt</p>
                <input className='structinput'value={tbwh} onChange={(e)=>setTbwh(e.target.value)} />
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>Dtbw</p>
                <input className='structinput'value={dtbw} onChange={(e)=>setDtbw(e.target.value)}/>
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>Twb</p>
                <input className='structinput' value={twb} onChange={(e)=>setTwb(e.target.value)}/>
            </div>
            
            <div className='strucform'>
                <p className='structlabel'>r</p>
                <input className='structinput' value={r} onChange={(e)=>setR(e.target.value)}/>
            </div>
            

            <div className='strucform'>
                <p className='structlabel'>Ncr</p>
                <input className='structinput' value={ncr} onChange={(e)=>setNcr(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dl</p>
                <input className='structinput' value={dl} onChange={(e)=>setDl(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Nl</p>
                <input className='structinput' value={nl} onChange={(e)=>setNl(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw4</p>
                <input className='structinput' value={dbw4} onChange={(e)=>setDbw4(e.target.value)}  />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw4</p>
                <input className='structinput' value={bw4} onChange={(e)=>setBw(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tl</p>
                <input className='structinput' value={tl}  onChange={(e)=>setTl(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Ver</p>
                <input className='structinput' value={ver} onChange={(e)=>setVer(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw3</p>
                <input className='structinput' value={dbw3} onChange={(e)=>setDbw3(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw3</p>
                <input className='structinput' value={bw3} onChange={(e)=>setBw3(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdom1</p>
                <input className='structinput' value={tdom1} onChange={(e)=>setTdom1(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdom2</p>
                <input className='structinput' value={tdom2}  onChange={(e)=>setTdom2(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdom3</p>
                <input className='structinput' value={tdom3}  onChange={(e)=>setTdom3(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tcon</p>
                <input className='structinput' value={tcon} onChange={(e)=>setTcon(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw2</p>
                <input className='structinput'  value={bw2} onChange={(e)=>setBw2(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw2</p>
                <input className='structinput' value={dbw2} onChange={(e)=>setDbw2(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Cr</p>
                <input className='structinput' value={cr}  onChange={(e)=>setCr(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Harch1</p>
                <input className='structinput' value={harch1} onChange={(e)=>setHarch1(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Parch2</p>
                <input className='structinput' value={parch2} onChange={(e)=>setParch2(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Watlevv</p>
                <input className='structinput' value={watlevv}  onChange={(e)=>setWatlevv(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Ttb</p>
                <input className='structinput' value={ttb}  onChange={(e)=>setTtb(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dttb</p>
                <input className='structinput' value={dttb}  onChange={(e)=>setDttb(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>T3</p>
                <input className='structinput' value={t3} onChange={(e)=>setT3(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Df</p>
                <input className='structinput' value={df} onChange={(e)=>setDf(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Dbw</p>
                <input className='structinput' value={dbw} onChange={(e)=>setDbw(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Bw</p>
                <input className='structinput' value={bw} onChange={(e)=>setBw(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Sbc</p>
                <input className='structinput' value={sbc} onChange={(e)=>setSbc(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Tdf</p>
                <input className='structinput' value={tdf} onChange={(e)=>setTdf(e.target.value)} />
            </div>
            <div className='strucform'>
                <p className='structlabel'>Aw</p>
                <input className='structinput' value={aw} onChange={(e)=>setAw(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>Sbc</p>
                <input className='structinput' value={sbc} onChange={(e)=>setSbc(e.target.value)}/>
            </div>
            <div className='strucform'>
                <p className='structlabel'>No_of_s</p>
                <input className='structinput' value={no_of_s} onChange={(e)=>setNo_of_s(e.target.value)}/>
            </div>
            <div>
                {structureData?.data?.map((item)=>{
                    return(
                    <div>
                        <p className='validationtxt'>{item}</p>
                    </div>
                    )
                })}
            </div>
            {structureData?.data?.length  ?
            <div>
                { loading  ? 
                <Container>
                    <div className='loader' >
                        <CircularProgress />
                    </div>
                </Container> :
                <button className='valapi' onClick={handleUpdate}>Update</button>
                }        
            </div>
            : 
            <div>
                <button className='valapi' onClick={handleGenrate}>Genrate</button>
            </div>}
            
            
        </Container>
      )}
    </div>
  )
}

export default Structure