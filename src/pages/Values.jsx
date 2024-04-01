import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from '../App.module.css'
import ValueWithInput from '../Components/ChartWrapper/ValueWithInput';

const Values = () => {

    const [values, setValues] = useState([])

    const [criticalCpuTemp, setCritcialCpuTemp] = useState(0)
    const [criticalGpuTemp, setCritcialGpuTemp] = useState(0)
    const [criticalCpuLoad, setCritcialCpuLoad] = useState(0)
    const [criticalGpuLoad, setCritcialGpuLoad] = useState(0)
    const [criticalRamLoad, setCritcialRamLoad] = useState(0)

    useEffect(() => {
      subscribe()
    }, [values])
  
    const subscribe = async () => {
      try {
        const { data } = await axios.post('', {type: ''})
        setValues(data)
      } catch (e) {
        setTimeout(() => {
          subscribe()
        }, 500)
      }
    }

    return (
        <div>
            <ValueWithInput text={'Температура CPU'} value={1} criticalValue={criticalCpuTemp} setCriticalValue={setCritcialCpuTemp}/>
            <ValueWithInput text={'Нагрузка CPU'} value={1} criticalValue={criticalGpuTemp} setCriticalValue={setCritcialGpuTemp}/>
            <ValueWithInput text={'Температура GPU'} value={1} criticalValue={criticalCpuLoad} setCriticalValue={setCritcialCpuLoad}/>
            <ValueWithInput text={'Нагрузка GPU'} value={1} criticalValue={criticalGpuLoad} setCriticalValue={setCritcialGpuLoad}/>
            <ValueWithInput text={'Занятая ОЗУ'} value={1} criticalValue={criticalRamLoad} setCriticalValue={setCritcialRamLoad}/>
            <button>Сохранить</button>
        </div>
    )
}

export default Values