import { Request, Response } from 'express'

class CoreController {
    public static home(req: Request, res: Response) {
        res.send('<h2>w3care-challenge-api</h2><script src="socket.io/socket.io.js"></script>');
    }
}

export { CoreController };