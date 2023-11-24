import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import {
  privateProcedure,
  publicProcedure,
  router,
} from './trpc'
import { TRPCError } from '@trpc/server'
import { db } from '@/lib/db'


export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()

    if (!user?.id || !user?.email)
      throw new TRPCError({ code: 'UNAUTHORIZED' })

    // check if the user is in the database
    const dbUser = await db.user.findFirst({
      where: {
        UserId: user.id,
      },
    })

    if (!dbUser) {
      // create user in db
       await db.user.create({
        data: {
        UserId: user.id,
        email: user.email,
          
        },
      })

     
    }

    return { success: true }
  }),
  
})

export type AppRouter = typeof appRouter