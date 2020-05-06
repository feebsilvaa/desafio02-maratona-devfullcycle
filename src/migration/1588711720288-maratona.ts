import {MigrationInterface, QueryRunner, Table, getConnection } from "typeorm";
import { Maratona } from "src/maratona/maratona.model";

export class maratona1588711720288 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.createTable(new Table({
            name: "maratona",
            columns: [
                {
                    name: "id",
                    type: "integer",
                    isPrimary: true,
                },
                {
                    name: "aula",
                    type: "varchar",
                    length: "100"
                }
            ]
        }), true);

        await getConnection()
            .createQueryBuilder()
            .insert()
            .into(Maratona)
            .values([
                { aula: '01 - 04/05 - Full Cycle: Arquitetura e Estudo de Caso' }, 
                { aula: '02 - 04/05 - Ecossistema JS com Diego da Rocketseat' }, 
                { aula: '03 - 05/05 - Microsserviço Live Manager e Comunicação' }, 
                { aula: '04 - 04/05 - Skills de um Dev Full Cycle com Rodrigo Branas e Henrique Bastos' }, 
                { aula: '05 - 06/05 - Realizando Streaming com Websockets e WebRTC' }, 
                { aula: '06 - 06/05 - Tempo Real na Web' }, 
                { aula: '07 - 07/05 - Microsserviços de Chat e CodeBot' }, 
                { aula: '08 - 07/05 - gRPC é o futuro' }, 
                { aula: '09 - 08/05 - Deploy com Docker e Kubernetes' }, 
                { aula: '10 - 08/05 - CI / CD e Tipos de Deploy' }, 
                { aula: '11 - 09/05 - Dados do Chat com RabbitMQ e Elastic Stack' }, 
                { aula: '12 - 09/05 - Kafka com Elastic Stack' }, 
                { aula: '13 - 10/05 - Service Mesh com Istio e Kiali' }, 
                { aula: '14 - 11/05 - Abertura das Matrículas' }, 
            ])
            .execute();
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("maratona");
    }

}
