import axios from 'axios';
import { useEffect, useState } from 'react';
import classes from '../App.module.css'
import ValueWithInput from '../Components/ChartWrapper/ValueWithInput';

const Values = () => {

    const sendCriticalValues = () => {
      axios.post('', {CPU_TEMP_CRITICAL: criticalCpuTemp, GPU_TEMP_CRITICAL: criticalGpuTemp, CPU_BUSY_CRITICAL: criticalCpuLoad, GPU_BUSY_CRITICAL: criticalGpuLoad, RAM_BUSY_CRITICAL: criticalRamLoad})
    }

    const [values, setValues] = useState({})

    const [criticalCpuTemp, setCritcialCpuTemp] = useState(null)
    const [criticalGpuTemp, setCritcialGpuTemp] = useState(null)
    const [criticalCpuLoad, setCritcialCpuLoad] = useState(null)
    const [criticalGpuLoad, setCritcialGpuLoad] = useState(null)
    const [criticalRamLoad, setCritcialRamLoad] = useState(null)

    useEffect(() => {
      subscribe()
    }, [values])
  
    const subscribe = async () => {
      try {
        const { data } = await axios.get('')
        setValues(data)
      } catch (e) {
        setTimeout(() => {
          subscribe()
        }, 500)
      }
    }

    return (
        <div>
            <ValueWithInput text={'Температура CPU'} value={values.cpu_temp} criticalValue={criticalCpuTemp} setCriticalValue={setCritcialCpuTemp}/>
            <ValueWithInput text={'Нагрузка CPU'} value={values.cpu_busy} criticalValue={criticalGpuTemp} setCriticalValue={setCritcialGpuTemp}/>
            <ValueWithInput text={'Температура GPU'} value={values.gpu_temp} criticalValue={criticalCpuLoad} setCriticalValue={setCritcialCpuLoad}/>
            <ValueWithInput text={'Нагрузка GPU'} value={values.gpu_busy} criticalValue={criticalGpuLoad} setCriticalValue={setCritcialGpuLoad}/>
            <ValueWithInput text={'Занятая ОЗУ'} value={values.ram_busy} criticalValue={criticalRamLoad} setCriticalValue={setCritcialRamLoad}/>
            <button onClick={sendCriticalValues}>Сохранить</button>
        </div>
    )
}

export default Values