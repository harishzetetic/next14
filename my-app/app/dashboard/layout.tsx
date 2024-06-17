export default function DashboardLayout({
    sidebar,
    header,
    advertisement,
    children,
  }: {
    sidebar: React.ReactNode,
    header: React.ReactNode,
    advertisement: React.ReactNode,
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>
            <div>
                <div>{header}</div>
                <div style={{display: 'flex'}}>
                    <div style={{flex: 4}}>
                    {sidebar}
                    </div>
                    <div style={{flex: 8}}>
                    {children}
                    </div>
                </div>
                <div style={{border: '1px solid black'}}>{advertisement}</div>
            </div>
           
            
            
        </body>
      </html>
    )
  }
  