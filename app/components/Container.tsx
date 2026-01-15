type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`
        mx-auto w-full px-4
        max-w-[430px]
        sm:max-w-[640px]
        md:max-w-[768px]
        lg:max-w-[1024px]
        xl:max-w-[1280px]
        2xl:max-w-[1440px]
        ${className}
      `}
    >
      {children}
    </div>
  )
}
