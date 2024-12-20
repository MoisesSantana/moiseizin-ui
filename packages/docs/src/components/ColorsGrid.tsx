import { colors } from '@moiseizin/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([name, color]) => (
    <div key={name} style={{ backgroundColor: color, padding: '2rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#FFF') < 2.5 ? '#000' : '#FFF',
        }}
      >
        <strong>${name}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
