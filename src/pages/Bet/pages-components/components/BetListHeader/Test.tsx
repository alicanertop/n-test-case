import { state } from '../../context'

export function Test() {
  return (
    <div className="bg-gray-900 absolute border-2 border-sky-500 left-[300px] top-[10px]">
      <input
        value={state.text.value}
        onChange={(e) => {
          state.text.value = e.target.value

          try {
            state.betsCount.value = Number(e.target.value)
          } catch (error) {
            console.warn(error)
          }
        }}
      />
    </div>
  )
}
