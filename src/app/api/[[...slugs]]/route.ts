import { Elysia, t } from 'elysia'

const app = new Elysia({ prefix: '/api' })
    .get('/', () => 'hello Next')
    .post('/', ({ body }) => {

        const { name, isOk } = body

        return {
            name,
            isOk
        };
    }, {
        body: t.Object({
            name: t.String(),
            isOk: t.Boolean()
        })
    })
    .onError(({ code }) => {
        if (code === 'NOT_FOUND')
            return 'Na is handsome :('
    })

export const GET = app.handle
export const POST = app.handle