import prisma from '@/app/libs/prismadb'
import getSession from './getSession'

const getUsers = async () => {
  const session = await getSession()

  if (!session?.user?.email) {
    return ['name', 'name2']
  }

  try {
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    })

    return users
  } catch (error: any) {
    return ['name', 'name2']
  }
}

export default getUsers
