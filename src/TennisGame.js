const describeScore = (player) => {
    if (player.score === 0) {
        return "love"
    }

    if (player.score === 1) {
        return "fifteen"
    }

    if (player.score === 2) {
        return "thirty"
    }

    if (player.score === 3) {
        return "forty"
    }
}

const computeScore = (player1, player2) => {
    if (player1.score >= 3 && player2.score >= 3) {
        if (player1.score > player2.score) {
             if (player1.score - player2.score >= 2) {
                return "Game, Player 1"
             } else {
                return "Advantage, Player 1"
             }
        }

        if (player2.score > player1.score) {
             if (player2.score - player1.score >= 2) {
                return "Game, Player 2"
             } else {
                return "Advantage, Player 2"
             }
        }

        return "deuce!"
    }
    else {
        if (player1.score >= 4) {
            return "Game, Player 1"
        }

        if (player2.score >= 4) {
            return "Game, Player 2"
        }

        if (player1.score === player2.score) {
            return `${ describeScore(player1) } all`
        } else {
            return `${ describeScore(player1) }, ${ describeScore(player2) }`
        }
    }
}

module.exports = {
    describeScore,
    computeScore
}