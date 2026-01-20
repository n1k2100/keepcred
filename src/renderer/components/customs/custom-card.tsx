import { Card, CardProps, Flex, FlexProps, Typography } from 'antd'

/**
 * Пропсы заготовленной карточки
 */
export type CustomCardProps = CardProps & { gap?: FlexProps['gap']; children?: React.ReactNode }

/**
 * Компонент заготовленной карточки
 *
 * @returns Заготовленный компонент карточки
 */
export const CustomCard = (props: CustomCardProps) => {
  const { gap = 'small', title, children, ...etc } = props

  return (
    <Card
      size='small'
      title={
        title && (
          <Typography.Title level={3} style={{ textAlign: 'center' }}>
            {title}
          </Typography.Title>
        )
      }
      variant='borderless'
      {...etc}
    >
      <Flex vertical gap={gap} style={{ width: '100%', height: '100%' }} align='center' justify='start'>
        {children}
      </Flex>
    </Card>
  )
}
