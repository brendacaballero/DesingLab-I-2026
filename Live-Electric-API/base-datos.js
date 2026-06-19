import mysql from 'mysql2/promise.js';

// Datos para conectarme a la DB
const datosConexion = {
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'live-electric',
}



export async function obtenerVendedores() {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);

        // Consulta para obtener colores
        const consulta = `
        SELECT nombres, apellidos, correo, rol
        FROM .vendedores;`;

        // Ejecutando la consulta
        const [rows] = await connection.query(consulta);

        console.log(rows);

        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

export async function obtenerCompradores() {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);

        // Consulta para obtener colores
        const consulta = `
        SELECT nombres, apellidos, ci, celular, procedencia
        FROM compradores;`;

        // Ejecutando la consulta
        const [rows] = await connection.query(consulta);

        console.log(rows);

        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

export async function aniadirComprador(nombres, apellidos, ci, celular, procedencia) {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);

        // Consulta para obtener colores
        const consulta = `
        INSERT INTO compradores (nombres, apellidos, ci, celular, procedencia)
        VALUES('${nombres}', '${apellidos}', '${ci}', '${celular}', '${procedencia}');`;

        // Ejecutando la consulta
        const [rows] = await connection.query(consulta);

        console.log(rows);

        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

export async function obtenerColores() {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);

        // Consulta para obtener colores
        const consulta = `
        SELECT nombre
        FROM colores;`;

        // Ejecutando la consulta
        const [rows] = await connection.query(consulta);

        console.log(rows);

        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

export async function obtenerMotos() {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);

        // Consulta para obtener colores
        const consulta = `
        SELECT modelo, marca, precio
        FROM motocicletas;`;

        // Ejecutando la consulta
        const [rows] = await connection.query(consulta);

        console.log(rows);

        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

export async function obtenerVisitas() {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);

        // Consulta para obtener colores
        const consulta = `
        SELECT vis.id AS id, GROUP_CONCAT(mot.modelo SEPARATOR ', ') AS modelos, com.nombres AS nom_comprador , com.apellidos AS ape_comprador, ven.nombres as nom_vendedor, com.celular, presupuesto_min, presupuesto_max, estado, observaciones, fecha_creacion, fecha_actualizacion, actualizado_por
        FROM visitas vis 
        JOIN compradores com ON vis.comprador_id = com.id
        JOIN vendedores ven ON vis.vendedor_inicial_id = ven.id
        JOIN intereses i ON vis.id = i.visita_id
	    JOIN motocicletas mot ON i.motocicleta_id = mot.id
        GROUP BY com.nombres, ven.nombres, presupuesto_min, presupuesto_max, estado, observaciones, fecha_creacion, fecha_actualizacion, actualizado_por;`;

        // Ejecutando la consulta
        const [rows] = await connection.query(consulta);

        console.log(rows);

        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

export async function actualizarVisita(id, correo_vendedor, nom_comprador, ape_comprador, presupuesto_min, presupuesto_max, estado, modelos, observaciones) {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);
        //Consulta comprador unir nombre y apellido
        const consultaComprador = `
        SELECT id 
        FROM compradores c 
        WHERE c.nombres  = '${nom_comprador}' AND c.apellidos = '${ape_comprador}';
        `;
        const [resultadoComprador] = await connection.query(consultaComprador);
        const compradorId = resultadoComprador[0].id

        //Consulta vendedor con su correo
        const consultaVendedor = `
        SELECT id 
        FROM vendedores v 
        WHERE v.correo   = '${correo_vendedor}';
        `;
        const [resultadoVendedor] = await connection.query(consultaVendedor);
        const vendedorId = resultadoVendedor[0].id

        const fechaActual = new Date().toISOString().slice(0, 19).replace('T', ' ')

        // Consulta para añadir cliente nuevo
        const consulta = `
        INSERT INTO visitas
        (id, comprador_id, vendedor_inicial_id, presupuesto_min, presupuesto_max, estado, observaciones, fecha_creacion, fecha_actualizacion, actualizado_por)
        VALUES(${id ?? 'NULL'}, ${compradorId}, ${vendedorId}, ${presupuesto_min}, ${presupuesto_max}, '${estado}', '${observaciones}', '${fechaActual}', '${fechaActual}', ${vendedorId})
        ON DUPLICATE KEY UPDATE
            presupuesto_min = VALUES(presupuesto_min),
            presupuesto_max = VALUES(presupuesto_max),
            observaciones = VALUES(observaciones),
            estado = VALUES(estado),
            fecha_actualizacion = VALUES(fecha_actualizacion),
            actualizado_por = VALUES(actualizado_por)
        ;
        `;

        // Ejecutando la consulta
        const [resultadoInsertVisita] = await connection.query(consulta);

        const visitaId = id || resultadoInsertVisita.insertId;

        if (modelos) {
            // Buscar los IDs de esas motocicletas en la base de datos
            const consultaMotos = `
            SELECT id 
            FROM motocicletas 
            WHERE modelo IN (${modelos.split(', ').map(function (modelo) {
                return `'${modelo}'`
            }).join(', ')})`;

            const [motosEncontradas] = await connection.query(consultaMotos);

            if (motosEncontradas.length > 0) {
                // Si la visita ya existia, primero borramos sus intereses anteriores para evitar duplicar registros en la tabla intermedia.
                await connection.query(`DELETE FROM intereses WHERE visita_id = ${visitaId}`);

                for (const moto of motosEncontradas) {
                    await connection.query(`INSERT INTO intereses (visita_id, motocicleta_id) VALUES(${visitaId}, ${moto.id});`)
                }
            }
        }

        const [rows] = await connection.query(`SELECT * FROM visitas WHERE id = ${visitaId}`);
        console.log(rows);

        return rows;
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

export async function obtenerLogin(correo) {
    let connection;
    try {
        connection = await mysql.createConnection(datosConexion);

        // Consulta para obtener colores
        const consulta = `
        SELECT correo, password, rol
        FROM vendedores
        WHERE correo = '${correo}';`;

        // Ejecutando la consulta
        const [rows] = await connection.query(consulta);

        console.log(rows);

        return rows[0];
    } catch (error) {
        console.error(error);
    } finally {
        if (connection) {
            await connection.end();
            console.log('Fin de la conexion')
        }
    }
}

