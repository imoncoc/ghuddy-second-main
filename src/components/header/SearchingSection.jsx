
import Container from '../../shared/container'

const SearchingSection = () => {
    return (
        <Container>
            <div className='bg-bg-white h-[84px]'>
                <div className='xl:max-w-[1100px]  md:max-w-[765px] md:px-[16px] max-w-[343px] px-[0px] xl:px-[0px] h-full    mx-auto'>

                    {/* <div className='grid grid-cols-2 gap-4 place-content-center h-full'> */}
                    <div className='flex items-center justify-between h-full'>
                        <div className='flex'>
                            <div className='flex items-center border-[1px] border-btn-secondary py-3 px-14 text-[14px] rounded-[300px] mr-4'>
                                <span className='mr-1 text-btn-secondary'>Price</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                        <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke="#2E6980" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className='flex items-center border-[1px] border-btn-secondary py-3 px-8 text-[14px] rounded-[300px] mr-4'>
                                <span className='mr-1 text-btn-secondary'>Time & Duration</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                        <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke="#2E6980" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                            <div className='flex items-center border-[1px] border-btn-secondary py-3 px-14 text-[14px] rounded-[300px]'>
                                <span className='mr-1 text-btn-secondary'>Type</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                        <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke="#2E6980" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='flex items-center border-[1px] border-btn-secondary py-3 px-8 text-[14px] rounded-[300px]'>
                                <span className='mr-1 text-btn-secondary'>Advanced Search</span>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                        <path d="M2.5 4.5L6.5 8.5L10.5 4.5" stroke="#2E6980" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default SearchingSection