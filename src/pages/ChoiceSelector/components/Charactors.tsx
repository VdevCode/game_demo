import images from '@shared/assets/images'

function Charactors() {
    const ongs = [images.ong1, images.ong2, images.ong3]
  return (
    <div className='flex gap-4 items-center'>
        { ongs.map((item, idx) => (
            <div key={idx} className='relative w-20 h-24'>
                <img className='w-full h-full' src={images.boxCharactor} alt="" />
                <img className='absolute bottom-7 w-20 h-20 object-contain' src={item} alt="" />
            </div>
        ))}
    </div>
  )
}

export default Charactors