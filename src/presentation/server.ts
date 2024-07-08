import { CheckService } from "../domain/use-cases/checks/check-service";
import { CronService } from "./cron/cron-service"


export class Server {

    public static start() { // static sirve para no instanciar la clase
        console.log('Server started...')

        CronService.createJob(
            '*/5 * * * * *',          
            () => {
                const url = 'https://www.google.com/'
                new CheckService(
                  () => console.log(`${url} is OK`),
                  ( error ) => console.log( error)  
                )
                .execute(url)
                //new CheckService().execute('http://localhost:3000/')
                
            }
        );

        // CronService.createJob(
        //     '*/2 * * * * *',          
        //     () => {
        //         const date = new Date();
        //         console.log(`2 seconds ${date}`);
        //     }
        // );

        // CronService.createJob(
        //     '*/3 * * * * *',          
        //     () => {
        //         const date = new Date();
        //         console.log(`3 seconds ${date}`);
        //     }
        // );



    }

}

