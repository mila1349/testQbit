import React, {useState} from 'react'
import { motion } from 'framer-motion'

export default function TextSlideUp({ children, ...rest }) {
  let words = children.split(' ')
  const [view, setView] = useState(false)
  return words.map((word, i) => {
    return (
      <motion.div
        key={children + i}
        style={{ display: 'inline-block', overflow: 'hidden' }}
        whileInView={()=>setView(true)}
        viewport={{margin:'-100px'}}
      >
        <motion.div
          {...rest}
          style={{ display: 'inline-block', willChange: 'transform' }}
          initial={{y:'100%'}}
          animate={view&&{y:0}}
          transition={{
              duration:0.8
          }}
        >
          {word + (i !== words.length - 1 ? '\u00A0' : '')}
        </motion.div>
      </motion.div>
    )
  })
}