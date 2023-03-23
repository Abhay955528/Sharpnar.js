const List = document.getElementsByClassName('list-group-item');

List[4].style.color = 'green';
List[4].style.fontWeight = 'bold';

for (let i = 0; i < List.length; i++) {
    List[i].style.backgroundColor = '#f4f4f4';
}
List[2].style.background = 'green';
