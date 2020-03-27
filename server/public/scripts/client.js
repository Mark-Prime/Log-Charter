console.log('js');

// Global Variables
let playerHover = '';
let playerIndex = 0;
let JSONdata;
let classes = {}

// Code
$(readyNow)

function readyNow() {
    console.log('jQ');
    $('#btn-load').on('click', (event)=>{
        event.preventDefault();
        loadHome()
    })

}

// Bar Graphs
function bluBarGraph(data, steamIDs, userNames) {
    let kills = gatherInfo(data, steamIDs, userNames, 'kills', true, 'Blue');
    let deaths = gatherInfo(data, steamIDs, userNames, 'deaths', false, 'Blue');
    const kdbtx = document.getElementById('bluChart').getContext('2d');
    var bluChart = new Chart(kdbtx, {
        type: 'bar',
        data: {
            labels: kills.rgba.labels,
            datasets: [{
                labels: kills.rgba.labels,
                label: 'Kills',
                borderAlign: 'inner',
                data: kills.rgba.data,
                backgroundColor: kills.rgba.backgroundColor,
                hoverBackgroundColor: kills.rgba.hoverBackgroundColor,
                borderColor: kills.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: deaths.rgba.labels,
                label: 'Deaths',
                borderAlign: 'inner',
                data: deaths.rgba.data,
                backgroundColor: deaths.rgba.backgroundColor,
                hoverBackgroundColor: deaths.rgba.hoverBackgroundColor,
                borderColor: deaths.rgba.borderColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Kills/Deaths'
            },
            legend: {
                display: false,
            },
            'onClick': handleClick,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var index = tooltipItem.index;

                        playerHover = dataset.labels[index]
                        playerIndex = index;
                        return `${dataset.labels[index]} ${dataset.label}: ${dataset.data[index]}`;
                    }
                }
            }
        }
    });
}

function redBarGraph(data, steamIDs, userNames) {
    let kills = gatherInfo(data, steamIDs, userNames, 'kills', true, 'Red');
    let deaths = gatherInfo(data, steamIDs, userNames, 'deaths', false, 'Red');
    const kdrtx = document.getElementById('redChart').getContext('2d');
    var redChart = new Chart(kdrtx, {
        type: 'bar',
        data: {
            labels: kills.rgba.labels,
            datasets: [{
                labels: kills.rgba.labels,
                label: 'Kills',
                borderAlign: 'inner',
                data: kills.rgba.data,
                backgroundColor: kills.rgba.backgroundColor,
                hoverBackgroundColor: kills.rgba.hoverBackgroundColor,
                borderColor: kills.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: deaths.rgba.labels,
                label: 'Deaths',
                borderAlign: 'inner',
                data: deaths.rgba.data,
                backgroundColor: deaths.rgba.backgroundColor,
                hoverBackgroundColor: deaths.rgba.hoverBackgroundColor,
                borderColor: deaths.rgba.borderColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Kills/Deaths'
            },
            legend: {
                display: false,
            },
            'onClick': handleClick,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var index = tooltipItem.index;

                        playerHover = dataset.labels[index]
                        playerIndex = index;
                        return `${dataset.labels[index]} ${dataset.label}: ${dataset.data[index]}`;
                    }
                }
            }
        }
    });
}

function kdBarGraph(data, steamIDs, userNames) {
    let kills = gatherInfo(data, steamIDs, userNames, 'kills', true, undefined, true);
    let assists = gatherInfo(data, steamIDs, userNames, 'assists', true, undefined, true);
    let deaths = gatherInfo(data, steamIDs, userNames, 'deaths', false, undefined, true);
    const kdtx = document.getElementById('kdChart').getContext('2d');
    var kdChart = new Chart(kdtx, {
        type: 'bar',
        data: {
            labels: kills.rgba.labels,
            datasets: [{
                labels: kills.rgba.labels,
                label: 'Kills',
                borderAlign: 'inner',
                data: kills.rgba.data,
                backgroundColor: kills.rgba.backgroundColor,
                hoverBackgroundColor: kills.rgba.hoverBackgroundColor,
                borderColor: kills.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: assists.rgba.labels,
                label: 'Assists',
                borderAlign: 'inner',
                data: assists.rgba.data,
                backgroundColor: assists.rgba.backgroundColor,
                hoverBackgroundColor: assists.rgba.hoverBackgroundColor,
                borderColor: assists.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: deaths.rgba.labels,
                label: 'Deaths',
                borderAlign: 'inner',
                data: deaths.rgba.data,
                backgroundColor: deaths.rgba.backgroundColor,
                hoverBackgroundColor: deaths.rgba.hoverBackgroundColor,
                borderColor: deaths.rgba.borderColor,
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Kills/Assists/Deaths'
            },
            legend: {
                display: false,
            },
            'onClick': handleClick,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var index = tooltipItem.index;

                        playerHover = dataset.labels[index]
                        playerIndex = index;
                        return `${dataset.labels[index]} ${dataset.label}: ${dataset.data[index]}`;
                    }
                }
            }
        }
    });
}


// Pie Charts
function killsPieChart(data, steamIDs, userNames) {
    let kills = gatherInfo(data, steamIDs, userNames, 'kills', true);
    const ktx = document.getElementById('killsChart').getContext('2d');
    var killsChart = new Chart(ktx, {
        type: 'pie',
        data: {
            labels: kills.rgba.labels,
            datasets: [{
                labels: kills.rgba.labels,
                label: 'Kills',
                borderAlign: 'inner',
                data: kills.rgba.data,
                backgroundColor: kills.rgba.backgroundColor,
                hoverBackgroundColor: kills.rgba.hoverBackgroundColor,
                borderColor: kills.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: ['Red Teams Kills', 'Blue Teams Kills'],
                label: 'Team Kills',
                borderAlign: 'inner',
                data: [data.teams.Red.kills, data.teams.Blue.kills],
                type: 'pie',
                backgroundColor: [
                    'rgba(255, 0, 0, 0.3)',
                    'rgba(0, 0, 255, 0.3)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Kills'
            },
            legend: {
                display: false,
            },
            'onClick': handleClick,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var index = tooltipItem.index;
                        playerHover = dataset.labels[index]
                        playerIndex = index;
                        return dataset.labels[index] + ': ' + dataset.data[index];
                    }
                }
            }
        }
    });
}

function deathsPieChart(data, steamIDs, userNames) {
    let deaths = gatherInfo(data, steamIDs, userNames, 'deaths', false);
    const dtx = document.getElementById('deathChart').getContext('2d');
    var deathChart = new Chart(dtx, {
        type: 'pie',
        data: {
            labels: deaths.rgba.labels,
            datasets: [{
                labels: deaths.rgba.labels,
                label: 'Deaths',
                borderAlign: 'inner',
                data: deaths.rgba.data,
                backgroundColor: deaths.rgba.backgroundColor,
                hoverBackgroundColor: deaths.rgba.hoverBackgroundColor,
                borderColor: deaths.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: ['Red Teams Deaths', 'Blue Teams Deaths'],
                label: 'Team Deaths',
                borderAlign: 'inner',
                data: [deaths.rgba.totalRed, deaths.rgba.totalBlue],
                type: 'pie',
                backgroundColor: [
                    'rgba(255, 0, 0, 0.3)',
                    'rgba(0, 0, 255, 0.3)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Deaths'
            },
            legend: {
                display: false,
            },
            'onClick': handleClick,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var index = tooltipItem.index;
                        playerHover = dataset.labels[index]
                        playerIndex = index;
                        return dataset.labels[index] + ': ' + dataset.data[index];
                    }
                }
            }
        }
    });
}

function damagePieChart(data, steamIDs, userNames) {
    let damage = gatherInfo(data, steamIDs, userNames, 'dmg', true);
    const datx = document.getElementById('damageChart').getContext('2d');
    var damageChart = new Chart(datx, {
        type: 'pie',
        data: {
            labels: damage.rgba.labels,
            datasets: [{
                labels: damage.rgba.labels,
                label: 'Damage',
                borderAlign: 'inner',
                data: damage.rgba.data,
                backgroundColor: damage.rgba.backgroundColor,
                hoverBackgroundColor: damage.rgba.hoverBackgroundColor,
                borderColor: damage.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: ['Red Teams Damage', 'Blue Teams Damage'],
                label: 'Team Damage',
                borderAlign: 'inner',
                data: [damage.rgba.totalRed, damage.rgba.totalBlue],
                type: 'pie',
                backgroundColor: [
                    'rgba(255, 0, 0, 0.3)',
                    'rgba(0, 0, 255, 0.3)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Damage'
            },
            legend: {
                display: false,
            },
            'onClick': handleClick,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var index = tooltipItem.index;
                        playerHover = dataset.labels[index]
                        playerIndex = index;
                        return `${dataset.labels[index]}:  ${dataset.data[index]}`;
                    }
                }
            }
        }
    });
}

function damageTakenPieChart(data, steamIDs, userNames) {
    let damageTaken = gatherInfo(data, steamIDs, userNames, 'dt', true);
    const dttx = document.getElementById('dtChart').getContext('2d');
    var dtChart = new Chart(dttx, {
        type: 'pie',
        data: {
            labels: damageTaken.rgba.labels,
            datasets: [{
                labels: damageTaken.rgba.labels,
                label: 'Damage Taken',
                borderAlign: 'inner',
                data: damageTaken.rgba.data,
                backgroundColor: damageTaken.rgba.backgroundColor,
                hoverBackgroundColor: damageTaken.rgba.hoverBackgroundColor,
                borderColor: damageTaken.rgba.borderColor,
                borderWidth: 1
            },
            {
                labels: ['Red Teams Damage Taken', 'Blue Teams Damage Taken'],
                label: 'Team Damage Taken',
                borderAlign: 'inner',
                data: [damageTaken.rgba.totalRed, damageTaken.rgba.totalBlue],
                type: 'pie',
                backgroundColor: [
                    'rgba(255, 0, 0, 0.3)',
                    'rgba(0, 0, 255, 0.3)'
                ],
                hoverBackgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: false,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: 'Damage Taken'
            },
            legend: {
                display: false,
            },
            'onClick': handleClick,
            tooltips: {
                callbacks: {
                    label: function (tooltipItem, data) {
                        var dataset = data.datasets[tooltipItem.datasetIndex];
                        var index = tooltipItem.index;
                        playerHover = dataset.labels[index]
                        playerIndex = index;
                        return dataset.labels[index] + ': ' + dataset.data[index];
                    }
                }
            }
        }
    });
}


// Routes
function loadHome() {
    $.ajax({
        method: 'GET',
        url: '/home',
    }).then(function (response) {
        console.log('Response:', response);
        loadMainPage($('#in-link').val().replace('logs.tf/', 'logs.tf/json/'));

    }).catch(function (error) {
        console.log(error)
    })
}

// Functions
function handleClick(event) {
    console.log(playerHover, playerIndex);
}

// Loading
function loadMainPage(link) {
    $('#charts').empty();
    $('#charts').append(`
    <div class="row score-container">
            <div class="col-md border">
                <h5>
                    <div id="text-map" class="text-left"></div>
                </h5>
            </div>
            <div class="col-md border">
                <h5>
                    <div id="text-title" class="text-right"></div>
                </h5>
            </div>
        </div>
        <div class="row score-container">
            <div class="col blu border">
                <h2>
                    <div id="blu-score" class="pull-right"></div>
                    <div class="pull-left">BLU</div>
                </h2>
            </div>
            <div class="col-sm-2 border">
                <h2>
                    <div class="text-center" id="game-length"></div>
                </h2>
            </div>
            <div class="col red border">
                <h2>
                    <div class="pull-right">RED</div>
                    <div id="red-score" class="pull-left"></div>
                </h2>
            </div>
        </div>
        <div id="chart-grid">
            <div class="row">
                <div class="col">
                    <canvas id="killsChart" height="280" width="240"></canvas>
                </div>
                <div class="col">
                    <canvas id="deathChart" height="280" width="240"></canvas>
                </div>
                <div class="col">
                    <canvas id="damageChart" height="280" width="240"></canvas>
                </div>
                <div class="col">
                    <canvas id="dtChart" height="280" width="240"></canvas>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <canvas id="kdChart" height="305" width="1120"></canvas>
                </div>
            </div>
        </div>
        `)
    $.getJSON(link, function (data) {
        JSONdata = data;
        const names = data.names;
        const steamIDs = Object.keys(names)
        const userNames = Object.values(names)
        
        updateHeader(data)
        killsPieChart(data, steamIDs, userNames)
        deathsPieChart(data, steamIDs, userNames)
        damagePieChart(data, steamIDs, userNames)
        damageTakenPieChart(data, steamIDs, userNames)
        kdBarGraph(data, steamIDs, userNames)
        gatherClassInfo(data, steamIDs)
    })
}

function loadClass(playerClass) {
    $('#chart-grid').empty();
    if (classes[playerClass]) {
        switch (playerClass) {
            case 'scout':
                $('#chart-grid').append(`
                <div class="row">
                    <div class="col pull-left">
                        <canvas id="killsChart" height="280" width="240"></canvas>
                    </div>
                    <div class="col pull-right">
                        <canvas id="deathsChart" height="280" width="240"></canvas>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <canvas id="kdChart" height="305" width="1120"></canvas>
                    </div>
                </div>
                `);

                let kills = gatherInfo(JSONdata, steamIDs, userNames, 'kills', true, 'Blue');
                let deaths = gatherInfo(JSONdata, steamIDs, userNames, 'deaths', false, 'Blue');
                const kdbtx = document.getElementById('killsChart').getContext('2d');
                var bluChart = new Chart(kdbtx, {
                    type: 'bar',
                    data: {
                        labels: kills.rgba.labels,
                        datasets: [{
                            labels: kills.rgba.labels,
                            label: 'Kills',
                            borderAlign: 'inner',
                            data: kills.rgba.data,
                            backgroundColor: kills.rgba.backgroundColor,
                            hoverBackgroundColor: kills.rgba.hoverBackgroundColor,
                            borderColor: kills.rgba.borderColor,
                            borderWidth: 1
                        },
                        {
                            labels: deaths.rgba.labels,
                            label: 'Deaths',
                            borderAlign: 'inner',
                            data: deaths.rgba.data,
                            backgroundColor: deaths.rgba.backgroundColor,
                            hoverBackgroundColor: deaths.rgba.hoverBackgroundColor,
                            borderColor: deaths.rgba.borderColor,
                            borderWidth: 1
                        }]
                    },
                    options: {
                        responsive: false,
                        maintainAspectRatio: false,
                        title: {
                            display: true,
                            text: 'Kills/Deaths'
                        },
                        legend: {
                            display: false,
                        },
                        'onClick': handleClick,
                        tooltips: {
                            callbacks: {
                                label: function (tooltipItem, data) {
                                    var dataset = data.datasets[tooltipItem.datasetIndex];
                                    var index = tooltipItem.index;

                                    playerHover = dataset.labels[index]
                                    playerIndex = index;
                                    return `${dataset.labels[index]} ${dataset.label}: ${dataset.data[index]}`;
                                }
                            }
                        }
                    }
                });
                break;
            case 'soldier':
                $('#chart-grid').append(``);

                break;
            case 'pyro':
                $('#chart-grid').append(``);

                break;
            case 'demoman':
                $('#chart-grid').append(``);

                break;
            case 'heavy':
                $('#chart-grid').append(``);

                break;
            case 'engineer':
                $('#chart-grid').append(``);

                break;
            case 'medic':
                $('#chart-grid').append(``);

                break;
            case 'sniper':
                $('#chart-grid').append(``);

                break;
            case 'spy':
                $('#chart-grid').append(``);

                break;
            default:
                loadHome();
        }
    } else {
        loadHome();
    }
    
    
}

// JSON parsing
function updateHeader(data) {
    let mind = data.length % (60 * 60);
    let minutes = Math.floor(mind / 60);

    let secd = mind % 60;
    let seconds = Math.ceil(secd);

    $('#text-map').text(data.info.map);
    $('#game-length').text(`${minutes}:${seconds}`);
    $('#text-title').text(data.info.title);
    $('#red-score').text(data.teams.Red.score);
    $('#blu-score').text(data.teams.Blue.score);

    if (data.teams.Red.score > data.teams.Blue.score) {
        $('body').removeClass();
        $('body').addClass('red');
    } else if (data.teams.Red.score < data.teams.Blue.score) {
        $('body').removeClass();
        $('body').addClass('blu')
    }
}

function gatherInfo(data, steamIDs, userNames, info, positive, team, flipped){
    let count = [];
    let teams = [];
    let users = [];
    let i = 0;
    for (const index of steamIDs) {
        if (team === undefined || team === data.players[index].team){
            count.push(data.players[index][info])
            teams.push(data.players[index].team)
            users.push(userNames[i])
        }
        i++;
    }
    
    if (flipped === true) {
        let rgba = decideColorFlipped(count, teams, users, positive)

        return { rgba }
    } else {
        let rgba = decideColor(count, teams, users, positive)

        return { rgba }
    }
}

function gatherClassInfo(data, steamIDs) {
    let i = 0;
    for (const index of steamIDs) {
        for (const playerClass of data.players[index].class_stats) {
            if (classes[playerClass.type]) {
                classes[playerClass.type].push({ index, playerClass, team: data.players[index].team })
            } else {
                classes[playerClass.type] = [{ index, playerClass, team: data.players[index].team }]
            }
        }
        
        i++;
    }
}

function gatherPlayerInfo(positive, flipped, playerName) {

}

function decideColor(kills, teams, userNames, positive) {
    let maxKills = Math.max(...kills);
    let minKills = Math.min(...kills);
    let backgroundColor = [];
    let hoverBackgroundColor = [];
    let borderColor = [];
    let labels = [];
    let data = [];
    let red;
    let green;
    let blue;
    let percent;
    let totalRed = 0;
    let totalBlue = 0;
    for (let i = 0; i < kills.length; i++) {
        if (positive){
            percent = (0.7 * (kills[i] / maxKills)) + 0.3;
        } else {
            percent = ((0.5 * (minKills / kills[i])) + 0.5);
        }
        if (teams[i] === 'Red'){
            totalRed += kills[i];
            red = Math.round(255 * percent);
            green = Math.round(0 * percent);
            blue = Math.round(0 * percent);
            hoverBackgroundColor.unshift(`rgba(255, 99, 132, 0.6)`);
            borderColor.unshift(`rgba(255, 99, 132, 1)`);
            backgroundColor.unshift(`rgba(${red}, ${green}, ${blue}, 0.3)`);
            labels.unshift(userNames[i])
            data.unshift(kills[i])
            
        } else {
            totalBlue += kills[i];
            red = Math.round(0 * percent);
            green = Math.round(0 * percent);
            blue = Math.round(255 * percent);
            hoverBackgroundColor.push(`rgba(54, 162, 235, 0.6)`);
            borderColor.push(`rgba(54, 162, 235, 1)`);
            backgroundColor.push(`rgba(${red}, ${green}, ${blue}, 0.3)`);
            labels.push(userNames[i])
            data.push(kills[i])
        }
    }
    let rgba = { 
        backgroundColor, 
        hoverBackgroundColor, 
        borderColor, 
        labels, 
        data, 
        totalRed,
        totalBlue
    }
    return rgba;
}

function decideColorFlipped(kills, teams, userNames, positive) {
    let maxKills = Math.max(...kills);
    let minKills = Math.min(...kills);
    let backgroundColor = [];
    let hoverBackgroundColor = [];
    let borderColor = [];
    let labels = [];
    let data = [];
    let red;
    let green;
    let blue;
    let percent;
    let totalRed = 0;
    let totalBlue = 0;
    for (let i = 0; i < kills.length; i++) {
        if (positive) {
            percent = (0.7 * (kills[i] / maxKills)) + 0.3;
        } else {
            percent = ((0.5 * (minKills / kills[i])) + 0.5);
        }
        if (teams[i] === 'Red') {
            totalRed += kills[i];
            red = Math.round(255 * percent);
            green = Math.round(0 * percent);
            blue = Math.round(0 * percent);
            hoverBackgroundColor.push(`rgba(255, 99, 132, 0.6)`);
            borderColor.push(`rgba(255, 99, 132, 1)`);
            backgroundColor.push(`rgba(${red}, ${green}, ${blue}, 0.3)`);
            labels.push(userNames[i])
            data.push(kills[i])

        } else {
            totalBlue += kills[i];
            red = Math.round(0 * percent);
            green = Math.round(0 * percent);
            blue = Math.round(255 * percent);
            hoverBackgroundColor.unshift(`rgba(54, 162, 235, 0.6)`);
            borderColor.unshift(`rgba(54, 162, 235, 1)`);
            backgroundColor.unshift(`rgba(${red}, ${green}, ${blue}, 0.3)`);
            labels.unshift(userNames[i])
            data.unshift(kills[i])
        }
    }
    let rgba = {
        backgroundColor,
        hoverBackgroundColor,
        borderColor,
        labels,
        data,
        totalRed,
        totalBlue
    }
    return rgba;
}

