const express = require('express');

const __path = process.cwd();
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
    	author: 'Yusuf', 
        youtube: 'I T S U K I',
    	})
});

router.get('/api', (req, res) => {
    const config = {
        status: true,
        result: {
            author: 'Yusuf',
            github: 'YusufGabut',
            youtube: 'I T S U K I',
            docs: 'Pake Aj Ngab Gabut Gw Bikin Ginian:V',
        },
    };
    res.json(config);
});

module.exports = router;
