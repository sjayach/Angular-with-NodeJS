var app = angular.module('homework4App', []);
app.filter('highlight', function($sce) {
  return function(text, phrase) {
    if (phrase) text = text.replace(new RegExp('('+phrase+')', 'gi'),
      '<span class="highlighted">$1</span>')

    return $sce.trustAsHtml(text)
  }
});
  app.controller('homework4Ctrl', function($scope) {

    //var $scope = this;

    $scope.groups = [
      /*{text:'Make a todo list', done:false},
      {text:'Add an item to my list', done:false},
      {text:'Complete an item on my list', done:false}*/
      ];
 
    $scope.addGroup = function() {
      if($scope.groupName.length == 0)
        return;
      $scope.groups.push({name:$scope.groupName, description:$scope.groupDescription, students:[], tasks:[]});
      $scope.groupName = '';
      $scope.groupDescription = '';
    };
 
    $scope.remaining = function() {
      var count = 0;
      angular.forEach($scope.groups, function(group) {
        count += 1;
      });
      return count;
    };
    $scope.removeGroup = function(index) {
      $scope.groups.splice(index,1);
    }
    $scope.addStudents = function() {
      if($scope.studName.length == 0)
        return;
      //$scope.groups[$scope.groupId].studentTask.push({studentName:$scope.studName,task :[]})
      $scope.groups[$scope.groupId].students.push($scope.studName);
      $scope.studName = '';
    }

    $scope.groupStudentRemaining = function(index) {
      var group = $scope.groups[index];
      return (group.students.length);
    };

    $scope.removeStudentFromGroup = function(groupIndex, studentIndex) {

      var group = $scope.groups[groupIndex];

      //remove the task for the student before remove the student
      angular.forEach(group.tasks, function(task) {
        if(task.studentName == group.students[studentIndex])
          task.studentName = '';
      });
      group.students.splice(studentIndex,1);

    }

    $scope.addTask = function() {
      if($scope.groupTask.length == 0)
        return;
      $scope.groups[$scope.gid].tasks.push({taskName:$scope.groupTask, studentName:'', isDone:false});
      $scope.groupTask='';
    }
    $scope.totalGroupTask = function(index) {
      var group = $scope.groups[index];
      return group.tasks.length;
    }
    $scope.removeTaskFromGroup = function(groupIndex, taskIndex) {
        var group = $scope.groups[groupIndex];
        group.tasks.splice(taskIndex, 1);
    }
    $scope.remainingTask = function(index) {
      var group = $scope.groups[index];
      var count = 0;
      angular.forEach(group.tasks, function(task) {
        count += task.isDone ? 1 : 0;
      });
      return count;

    }

    $scope.archive = function() {
      var oldTodos = $scope.todos;
      $scope.todos = [];
      angular.forEach(oldTodos, function(todo) {
        if (!todo.done) $scope.todos.push(todo);
      });
    };
    $scope.taskToBeCompleted = function(index) {
      var group = $scope.groups[index];
      var count = 0;
      angular.forEach(group.tasks, function(task) {
        count += task.isDone ? 0 : 1;
      });
      return count;

    }
  });